import logging
import os

from django.conf import settings
from django.contrib import messages
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.messages.views import SuccessMessageMixin
from django.core.exceptions import PermissionDenied
from django.core.files.storage import default_storage
from django.db.models import ProtectedError
from django.http import JsonResponse
from django.shortcuts import render
from django.urls import reverse_lazy
from django.views import View
from django.views.generic import ListView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django_filters.views import FilterView

from account.mixins import LoginOnlyForCoachesMixin
from .choices import MUSCLE_GROUP_CATEGORIES
from .filters import ExerciseFilter
from .forms import ExerciseForm
from .models import Exercise, VideoUpload

logger = logging.getLogger(__name__)

class ChunkUploadView(View):
    def post(self, request, *args, **kwargs):
        try:
            # Check input data
            if 'chunk' not in request.FILES:
                return JsonResponse({'error': 'No chunk file provided'}, status=400)

            chunk = request.FILES['chunk']
            chunk_number = int(request.POST.get('chunk_number', 0))
            total_chunks = int(request.POST.get('total_chunks', 0))
            file_id = request.POST.get('file_id')
            filename = request.POST.get('filename')

            logger.info(f"Receiving chunk {chunk_number + 1}/{total_chunks} for file {filename}")

            # Get or create upload session
            upload_session, created = VideoUpload.objects.get_or_create(
                file_id=file_id,
                defaults={
                    'total_chunks': total_chunks,
                    'filename': filename,
                    'exercise_id': request.POST.get('exercise_id')
                }
            )

            # Save chunk
            temp_dir = os.path.join(settings.MEDIA_ROOT, 'temp')
            os.makedirs(temp_dir, exist_ok=True)

            chunk_path = os.path.join(temp_dir, f'{file_id}_chunk_{chunk_number}')
            with open(chunk_path, 'wb+') as destination:
                for chunk_data in chunk.chunks():
                    destination.write(chunk_data)

            # Update progress
            upload_session.received_chunks += 1
            upload_session.save()

            # If all chunks received, combine them
            if upload_session.received_chunks == total_chunks:
                try:
                    final_path = self._combine_chunks(file_id, total_chunks, temp_dir)
                    if final_path:
                        # Update exercise with final video
                        if upload_session.exercise_id:
                            exercise = Exercise.objects.get(id=upload_session.exercise_id)
                            with open(final_path, 'rb') as f:
                                exercise.training_video.save(filename, f, save=True)

                        # Cleanup
                        self._cleanup_chunks(file_id, total_chunks, temp_dir)
                        upload_session.delete()

                        return JsonResponse({
                            'status': 'complete',
                            'message': 'آپلود با موفقیت انجام شد'
                        })

                except Exception as e:
                    logger.exception("Error processing final file")
                    return JsonResponse({'error': str(e)}, status=500)

            # Return progress
            progress = (upload_session.received_chunks / total_chunks) * 100
            return JsonResponse({
                'status': 'processing',
                'progress': progress,
                'message': f'در حال آپلود: {progress:.1f}%'
            })

        except Exception as e:
            logger.exception("Error in chunk upload")
            return JsonResponse({'error': str(e)}, status=500)

    def _combine_chunks(self, file_id, total_chunks, temp_dir):
        """Combine all chunks into final file"""
        final_path = os.path.join(temp_dir, f'{file_id}_final')
        with open(final_path, 'wb') as outfile:
            for i in range(total_chunks):
                chunk_path = os.path.join(temp_dir, f'{file_id}_chunk_{i}')
                if not os.path.exists(chunk_path):
                    raise FileNotFoundError(f"Chunk {i} is missing")
                with open(chunk_path, 'rb') as infile:
                    outfile.write(infile.read())
        return final_path

    def _cleanup_chunks(self, file_id, total_chunks, temp_dir):
        """Clean up temporary files"""
        for i in range(total_chunks):
            chunk_path = os.path.join(temp_dir, f'{file_id}_chunk_{i}')
            if os.path.exists(chunk_path):
                os.remove(chunk_path)

        final_path = os.path.join(temp_dir, f'{file_id}_final')
        if os.path.exists(final_path):
            os.remove(final_path)
class ExerciseCreateView(LoginOnlyForCoachesMixin,CreateView):
    model = Exercise
    form_class = ExerciseForm
    template_name = 'exercise/exercise_form.html'
    success_url = reverse_lazy('exercise:exercise_list')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'ایجاد تمرین جدید'
        context['submit_text'] = 'ایجاد'
        return context

    def form_valid(self, form):
        try:
            exercise = form.save()
            messages.success(self.request, f"تمرین {exercise.name} با موفقیت ایجاد شد")
            return super().form_valid(form)
        except Exception as e:
            logger.exception(f"Exercise creation failed: {str(e)}")
            messages.error(self.request, "خطا در ایجاد تمرین")
            return self.form_invalid(form)

    def form_invalid(self, form):
        for field, errors in form.errors.items():
            field_label = form.fields[field].label or field
            for error in errors:
                messages.error(self.request, f"خطا در {field_label}: {error}")
        return super().form_invalid(form)
class ExerciseUpdateView(LoginOnlyForCoachesMixin,UpdateView):
    model = Exercise
    form_class = ExerciseForm
    template_name = 'exercise/exercise_form.html'
    success_url = reverse_lazy('exercise:exercise_list')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = f'ویرایش تمرین {self.object.name}'
        return context

    def form_valid(self, form):
        try:
            exercise = form.save()
            messages.success(self.request, "تمرین با موفقیت به‌روزرسانی شد!")
            return super().form_valid(form)
        except Exception as e:
            logger.exception(f"Exercise update failed: {str(e)}")
            messages.error(self.request, "خطا در به‌روزرسانی تمرین")
            return self.form_invalid(form)


class ExerciseListView(LoginOnlyForCoachesMixin,FilterView, ListView):
    model = Exercise
    template_name = 'exercise/exercise_list.html'
    context_object_name = 'exercises'
    paginate_by = 20
    filterset_class = ExerciseFilter

    def get_queryset(self):
        queryset = Exercise.objects.all()
        name = self.request.GET.get('name')
        if name:
            queryset = queryset.filter(name__icontains=name)
        muscle_group = self.request.GET.get('muscle_group')
        if muscle_group:
            # استفاده از دسته‌بندی‌های اصلی برای فیلتر کردن
            category_groups = MUSCLE_GROUP_CATEGORIES.get(muscle_group)
            if category_groups:
                queryset = queryset.filter(muscle_group__in=category_groups)
            else:
                queryset = queryset.filter(muscle_group=muscle_group)
        return queryset


class ExerciseDeleteView(LoginOnlyForCoachesMixin,DeleteView):
    model = Exercise
    template_name = 'exercise/exercise_confirm_delete.html'
    success_url = reverse_lazy('exercise:exercise_list')
    context_object_name = 'exercise'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = f'حذف تمرین {self.object.name}'
        return context

    def delete(self, request, *args, **kwargs):
        """
        Delete the exercise and its associated video file.
        """
        try:
            self.object = self.get_object()

            # ذخیره مسیر فایل ویدیو قبل از حذف آبجکت
            video_path = None
            if self.object.training_video:
                video_path = self.object.training_video.path

            # حذف آبجکت از دیتابیس
            success_url = self.get_success_url()
            self.object.delete()

            # حذف فایل ویدیو از مدیا
            if video_path and os.path.exists(video_path):
                try:
                    os.remove(video_path)
                    # حذف دایرکتوری خالی (اگر خالی باشد)
                    video_dir = os.path.dirname(video_path)
                    if not os.listdir(video_dir):
                        os.rmdir(video_dir)
                except OSError as e:
                    logger.error(f"Error removing video file {video_path}: {str(e)}")
                    messages.warning(
                        request,
                        "تمرین حذف شد اما در حذف فایل ویدیو مشکلی پیش آمد. لطفاً با مدیر سیستم تماس بگیرید."
                    )
                    return success_url

            messages.success(request, f"تمرین {self.object.name} با موفقیت حذف شد.")
            return success_url

        except ProtectedError:
            messages.error(
                request,
                "این تمرین به دلیل استفاده در برنامه‌های تمرینی قابل حذف نیست."
            )
            return self.get_success_url()

        except Exception as e:
            logger.exception("Error in exercise deletion")
            messages.error(
                request,
                "خطا در حذف تمرین. لطفاً دوباره تلاش کنید یا با پشتیبانی تماس بگیرید."
            )
            return self.get_success_url()

    def post(self, request, *args, **kwargs):
        """
        Handle POST requests: Delete the object and related files.
        """
        try:
            return self.delete(request, *args, **kwargs)
        except PermissionDenied:
            messages.error(request, "شما مجوز حذف این تمرین را ندارید.")
            return self.get_success_url()


def video_player_view(request, video_id):
    video_instance = Exercise.objects.get(id=video_id)
    return render(request, 'exercise/video_player.html', {
        'video': video_instance
    })


# views.py
class VideoListView(LoginOnlyForCoachesMixin,FilterView, ListView):
    model = Exercise
    template_name = 'exercise/video_list.html'
    context_object_name = 'videos'
    filterset_class = ExerciseFilter

    def get_queryset(self):
        # فقط تمرین‌هایی که ویدیو دارند
        queryset = Exercise.objects.exclude(training_video='').exclude(training_video__isnull=True)

        # فیلتر بر اساس نام
        name = self.request.GET.get('name')
        if name:
            queryset = queryset.filter(name__icontains=name)

        # فیلتر بر اساس گروه عضلانی
        muscle_group = self.request.GET.get('muscle_group')
        if muscle_group:
            category_groups = MUSCLE_GROUP_CATEGORIES.get(muscle_group)
            if category_groups:
                queryset = queryset.filter(muscle_group__in=category_groups)
            else:
                queryset = queryset.filter(muscle_group=muscle_group)

        return queryset.order_by('name')
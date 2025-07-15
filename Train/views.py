import json
import os
import io
import logging
import asyncio
import subprocess
from pathlib import Path
from datetime import datetime

from django.conf import settings
from django.contrib import messages
from django.db import transaction
from django.http import JsonResponse
from django.shortcuts import render, redirect, get_object_or_404
from django.urls import reverse
from django.views import View
from django.views.generic import UpdateView
from django.template.loader import render_to_string
from django.templatetags.static import static

from weasyprint import HTML
from asgiref.sync import sync_to_async
from retrying import retry
from telethon import TelegramClient, functions, types
from telethon.errors import FloodWaitError, UserPrivacyRestrictedError

from AthleteProfile.models import AthleteProfile
from Exercise.choices import MUSCLE_GROUP_CATEGORIES, MUSCLE_GROUP_CHOICES
from Exercise.models import Exercise
from Train.forms import ExerciseSetFormSet, TrainingPlanForm
from Train.models import ExerciseSet, TrainingPlan
from account.mixins import login_only_for_coaches, LoginOnlyForCoachesMixin

# تنظیمات مربوط به لاگر
logger = logging.getLogger(__name__)

# تنظیمات API تلگرام
API_ID = 'your api id telegram (int)'
API_HASH = 'your api hash telegram (str)'

@login_only_for_coaches
def create_training_plan_step1(request):
    """Handles the initial step of creating a training plan, capturing the basic plan details."""
    if request.method == 'POST':
        form = TrainingPlanForm(request.POST)
        if form.is_valid():
            # Saving form data to session for later retrieval
            training_plan_data = form.cleaned_data
            request.session['training_plan_data'] = {
                'athlete_profile_id': training_plan_data['athlete_profile'].id,
                'sessions': training_plan_data['sessions']
            }
            return redirect('train:create_training_plan_step2')
    else:
        form = TrainingPlanForm()

    return render(request, 'train/create_training_plan_step1.html', {
        'form': form,
    })


def get_video_duration(video_path):
    """Retrieve the duration of a video file using FFmpeg."""
    try:
        result = subprocess.run(
            ['ffmpeg', '-i', video_path], stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True
        )
        output = result.stderr  # FFmpeg مدت زمان را در stderr نمایش می‌دهد

        for line in output.split('\n'):
            if "Duration" in line:
                duration_str = line.split(",")[0].split("Duration:")[-1].strip()
                h, m, s = map(float, duration_str.replace(":", " ").split())
                return h * 3600 + m * 60 + s  # تبدیل به ثانیه
    except Exception as e:
        print(f"Error retrieving video duration: {e}")
        return None


def create_gif_thumbnail(video_path):
    """Create a GIF thumbnail from second 2.6 onward, handling edge cases properly"""
    gif_dir = os.path.join(settings.MEDIA_ROOT, 'exercise_gifs')
    os.makedirs(gif_dir, exist_ok=True)

    video_name = os.path.basename(video_path)
    gif_name = f"{os.path.splitext(video_name)[0]}.gif"
    gif_path = os.path.join(gif_dir, gif_name)

    # اگر گیف قبلاً ساخته شده، همان را برگردان
    if os.path.exists(gif_path):
        return os.path.join('exercise_gifs', gif_name)

    video_duration = get_video_duration(video_path)
    if not video_duration:
        print("Error: Could not determine video duration.")
        return None

    start_time = 2.6  # پیش‌فرض: شروع از ۲.۶ ثانیه
    gif_duration = 4  # پیش‌فرض: ۴ ثانیه

    # ✅ اگر ویدیو از ۲.۶ کوتاه‌تر بود، کل ویدیو را بگیریم
    if video_duration < 2.6:
        start_time = 0
        gif_duration = video_duration

    # ✅ اگر ویدیو بین ۲.۶ و ۶.۶ بود، نقطه شروع را طوری تغییر دهیم که کل ۴ ثانیه را داشته باشیم
    elif video_duration < 6.6:
        start_time = max(0, video_duration - 4)
        gif_duration = video_duration - start_time

    print(f"⏳ Creating GIF from {start_time}s for {gif_duration}s (Video Length: {video_duration}s)")

    try:
        # ✅ اجرای FFmpeg برای ساخت گیف
        command = [
            'ffmpeg', '-ss', str(start_time), '-i', video_path,  # تنظیم نقطه شروع
            '-t', str(gif_duration),  # تنظیم مدت‌زمان گیف (۴ ثانیه)
            '-vf', 'fps=10,scale=320:-1',  # کاهش نرخ فریم و تنظیم اندازه
            '-y', gif_path  # بازنویسی در صورت وجود فایل قبلی
        ]
        result = subprocess.run(command, capture_output=True, text=True)

        if result.returncode != 0:
            print("🚨 FFmpeg Error:")
            print(result.stderr)
            return None

    except Exception as e:
        print(f"Error creating GIF: {e}")
        return None

    return os.path.join('exercise_gifs', gif_name)


def filter_exercises(request):
    """Return filtered exercises based on muscle group"""
    muscle_group = request.GET.get('muscle_group')
    is_main_category = request.GET.get('is_main_category', False)
    exercises = Exercise.objects.all()

    if muscle_group:
        if is_main_category == 'true':
            subcategories = MUSCLE_GROUP_CATEGORIES.get(muscle_group, [])
            exercises = exercises.filter(muscle_group__in=subcategories)
        else:
            exercises = exercises.filter(muscle_group=muscle_group)

    categorized_exercises = []
    for exercise in exercises:
        name_lower = exercise.name.lower()
        exercise_data = {
            'id': exercise.id,
            'name': exercise.name,
            'muscle_group': exercise.muscle_group,
            'category': 'other',
        }

        # اگر ویدیو داشت، GIF بساز
        if exercise.training_video:
            video_path = exercise.training_video.path
            gif_path = create_gif_thumbnail(video_path)
            if gif_path:
                exercise_data['gif_url'] = os.path.join(settings.MEDIA_URL, gif_path)

        # Categorize based on name
        if any(term in name_lower or term in exercise.name for term in ['dumbell', 'dumbbell', 'دمبل', 'دمبلز']):
            exercise_data['category'] = 'dumbbell'
        elif any(term in name_lower or term in exercise.name for term in ['barbell', 'هالتر']):
            exercise_data['category'] = 'barbell'

        categorized_exercises.append(exercise_data)

    return JsonResponse({'exercises': categorized_exercises}, safe=False)

@login_only_for_coaches
def add_exercises_to_session(request):
    """Handle adding multiple exercises to a session"""
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            exercises_data = data.get('exercises', [])
            session_number = data.get('session_number')

            if not exercises_data or not session_number:
                return JsonResponse({'error': 'Invalid data'}, status=400)

            # Process exercises
            exercise_sets = []
            for exercise_data in exercises_data:
                exercise_set = ExerciseSet(
                    exercise_id=exercise_data['exercise_id'],
                    sets_reps=exercise_data.get('sets'),
                    session_number=session_number
                )

                if exercise_data.get('is_superset'):
                    exercise_set.is_superset = True
                    exercise_set.paired_exercise_id = exercise_data['paired_exercise_id']

                exercise_sets.append(exercise_set)

            # Save all exercise sets
            ExerciseSet.objects.bulk_create(exercise_sets)

            return JsonResponse({'success': True})

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=405)

@login_only_for_coaches
def create_training_plan_step2(request):
    training_plan_data = request.session.get('training_plan_data')
    if not training_plan_data:
        return redirect('train:create_training_plan_step1')

    num_sessions = int(training_plan_data.get('sessions', 1))
    athlete_profile = get_object_or_404(AthleteProfile, id=training_plan_data['athlete_profile_id'])
    last_training_plan = TrainingPlan.objects.filter(athlete_profile=athlete_profile).order_by('-created').first()

    # Group subcategories by their main category
    grouped_subcategories = {}
    # در تابع create_training_plan_step2
    for choice in MUSCLE_GROUP_CHOICES:
        subcategory_id, subcategory_name = choice

        # این شرط رو برداریم تا cardio و warmup_cooldown هم اضافه بشن
        # if subcategory_id in ['cardios', 'warmup_cooldowns']:
        #     continue

        # Find which main category this subcategory belongs to
        for category, subcategories in MUSCLE_GROUP_CATEGORIES.items():
            if isinstance(category, tuple):
                # برای دسته‌بندی‌های cardio و warmup_cooldown
                category_id = category[0]
                if subcategory_id in subcategories:
                    if category_id not in grouped_subcategories:
                        grouped_subcategories[category_id] = []
                    grouped_subcategories[category_id].append({
                        'id': subcategory_id,
                        'name': subcategory_name
                    })
                    break
            else:
                # برای سایر دسته‌بندی‌ها
                if subcategory_id in subcategories:
                    if category not in grouped_subcategories:
                        grouped_subcategories[category] = []
                    grouped_subcategories[category].append({
                        'id': subcategory_id,
                        'name': subcategory_name
                    })
                    break
    # Handle last training plan data
    last_plan_sessions = {}
    if last_training_plan:
        exercise_sets = ExerciseSet.objects.filter(training_plan=last_training_plan).order_by('session_number')
        for exercise_set in exercise_sets:
            last_plan_sessions.setdefault(exercise_set.session_number, []).append(exercise_set)
            exercise_set.display_sets = exercise_set.should_display_sets()

    if request.method == 'POST':
        formset = ExerciseSetFormSet(request.POST, prefix='exercise_set')

        # اضافه کردن print برای دیباگ
        print("Formset Data:", request.POST)
        print("Formset Valid:", formset.is_valid())
        if not formset.is_valid():
            print("Formset Errors:", formset.errors)
            for form in formset:
                print("Form Errors:", form.errors)

        if formset.is_valid():
            try:
                # چک کردن جلسات خالی
                session_data = {i: False for i in range(1, num_sessions + 1)}

                for form in formset:
                    if form.cleaned_data and not form.cleaned_data.get('DELETE', False):
                        session_number = form.cleaned_data.get('session_number')
                        if session_number:
                            session_data[session_number] = True

                empty_sessions = [session for session, has_data in session_data.items() if not has_data]

                if empty_sessions:
                    for session in empty_sessions:
                        messages.error(request, f"جلسه {session} خالی است")
                    raise ValueError("Empty sessions found")

                # ایجاد TrainingPlan
                training_plan = TrainingPlan.objects.create(
                    athlete_profile=athlete_profile
                )

                # ذخیره ExerciseSet ها
                instances = formset.save(commit=False)
                for instance in instances:
                    instance.training_plan = training_plan
                    instance.save()

                messages.success(request, "برنامه تمرینی با موفقیت ایجاد شد")
                return redirect('train:training_plan_overview', training_plan_id=training_plan.id)

            except ValueError as e:
                messages.error(request, str(e))
            except Exception as e:
                print("Error saving training plan:", str(e))
                messages.error(request, f"خطا در ذخیره برنامه تمرینی: {str(e)}")
        else:
            for form in formset:
                for field, errors in form.errors.items():
                    for error in errors:
                        messages.error(request, f"خطا در {field}: {error}")

            if formset.non_form_errors():
                for error in formset.non_form_errors():
                    messages.error(request, f"خطای فرم: {error}")

    else:
        formset = ExerciseSetFormSet(prefix='exercise_set')

    context = {
        'formset': formset,
        'num_sessions': range(1, num_sessions + 1),
        'grouped_subcategories': grouped_subcategories,
        'athlete_profile': athlete_profile,
        'last_plan_sessions': last_plan_sessions,
        'last_training_plan': last_training_plan,
        'SETS_CHOICES': ExerciseSet.SETS_CHOICES,
    }

    return render(request, 'train/create_training_plan_step2.html', context)


class EditTrainingPlanView(LoginOnlyForCoachesMixin,UpdateView):
    model = TrainingPlan
    template_name = 'train/edit_training_plan.html'
    fields = []

    def get_success_url(self):
        return reverse('train:training_plan_overview', kwargs={'training_plan_id': self.object.id})

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        training_plan = self.get_object()

        exercise_sets = ExerciseSet.objects.filter(
            training_plan=training_plan
        ).order_by('session_number')

        sessions = {}
        for exercise_set in exercise_sets:
            if exercise_set.session_number not in sessions:
                sessions[exercise_set.session_number] = []
            sessions[exercise_set.session_number].append(exercise_set)

        context.update({
            'training_plan': training_plan,
            'sessions': sessions,
            'SETS_CHOICES': ExerciseSet.SETS_CHOICES,
            'all_exercises': Exercise.objects.all(),
            'athlete_profile': training_plan.athlete_profile,
        })
        return context

    def post(self, request, *args, **kwargs):
        training_plan = self.get_object()

        try:
            with transaction.atomic():
                for key, value in request.POST.items():
                    if key.startswith('exercise_'):
                        exercise_set_id = key.split('_')[-1]
                        exercise_set = ExerciseSet.objects.get(
                            id=exercise_set_id,
                            training_plan=training_plan
                        )
                        exercise_set.exercise_id = value
                        exercise_set.save()
                    elif key.startswith('sets_reps_'):
                        exercise_set_id = key.split('_')[-1]
                        exercise_set = ExerciseSet.objects.get(
                            id=exercise_set_id,
                            training_plan=training_plan
                        )
                        exercise_set.sets_reps = value
                        exercise_set.save()
                    elif key.startswith('paired_exercise_'):
                        exercise_set_id = key.split('_')[-1]
                        exercise_set = ExerciseSet.objects.get(
                            id=exercise_set_id,
                            training_plan=training_plan
                        )
                        exercise_set.paired_exercise_id = value
                        exercise_set.save()

                messages.success(request, "برنامه تمرینی با موفقیت بروزرسانی شد")
                return redirect('train:training_plan_overview', training_plan_id=training_plan.id)

        except Exception as e:
            messages.error(request, f"خطا در بروزرسانی برنامه: {str(e)}")
            return self.get(request, *args, **kwargs)

@login_only_for_coaches
def training_plan_overview(request, training_plan_id):
    training_plan = get_object_or_404(TrainingPlan, id=training_plan_id)
    exercise_sets = ExerciseSet.objects.filter(training_plan=training_plan).order_by('session_number', 'id')  # Ordenar por session_number y luego por id

    # افزودن مقدار محاسبه‌شده به هر تمرین
    for exercise_set in exercise_sets:
        exercise_set.display_sets = exercise_set.should_display_sets()

    sessions = {}
    for exercise_set in exercise_sets:
        sessions.setdefault(exercise_set.session_number, []).append(exercise_set)

    # تعیین نام مربی بر اساس یوزرنیم
    coach_name = ""  # مقدار پیش‌فرض
    if request.user.username == "alimovhedi":
        coach_name = ""

    return render(request, 'train/training_plan_detail.html', {
        'training_plan': training_plan,
        'sessions': sessions,
        'coach_name': coach_name
    })

@login_only_for_coaches
def get_athlete_profile_details(request):
    """Fetch athlete profile details based on selected athlete ID."""
    athlete_id = request.GET.get('athlete_id')
    if athlete_id:
        try:
            athlete = AthleteProfile.objects.get(id=athlete_id)
            data = {
                'full_name': athlete.full_name,
                'age': athlete.age,
                'weight': str(athlete.weight),
                'height': str(athlete.height),
                'injuries': athlete.injuries,
                'training_history': athlete.training_history,
                'motivation_goal': athlete.get_motivation_goal_display(),
                'mobile_phone': athlete.mobile_phone,
                'telegram_whatsapp_phone': athlete.telegram_whatsapp_phone,
                'body_test_file': athlete.body_test_file.url if athlete.body_test_file else None,
                'supplements': athlete.supplements,
            }
            return JsonResponse({'success': True, 'data': data})
        except AthleteProfile.DoesNotExist:
            return JsonResponse({'success': False, 'error': 'Athlete not found.'})
    return JsonResponse({'success': False, 'error': 'Invalid request.'})


class TrainingPlanDeleteView(LoginOnlyForCoachesMixin,View):
    success_message = 'برنامه با موفقیت حذف شد.'

    def post(self, request, id, *args, **kwargs):
        training_plan = get_object_or_404(TrainingPlan, id=id)

        # حذف برنامه
        training_plan.delete()

        # نمایش پیام موفقیت
        messages.success(request, self.success_message)

        # بازگشت به صفحه لیست برنامه‌ها
        return redirect(
            reverse('athlete:athlete_training_plans', kwargs={'athlete_id': training_plan.athlete_profile.id}))


class PDFGenerator:
    """PDF generator that uses existing CSS styles"""

    def __init__(self, html_content):
        self.html_content = html_content
        self.base_url = Path(settings.BASE_DIR)
        self.font_path = str(self.base_url / 'public/static/fonts/farsi-fonts-fa-num/vazir-300.ttf')

        # Load core CSS files
        self.core_css_path = self.base_url / 'public/static/css/train-planing.css'
        self.fonts_css_path = self.base_url / 'public/static/css/fonts.css'

    def _load_core_styles(self):
        """Load existing CSS files"""
        styles = []

        # Load fonts.css
        if self.fonts_css_path.exists():
            with open(self.fonts_css_path) as f:
                styles.append(f.read())

        # Load train-planing.css
        if self.core_css_path.exists():
            with open(self.core_css_path) as f:
                styles.append(f.read())

        return '\n'.join(styles)

    def generate_pdf(self):
        """Generate PDF with existing styles"""
        try:
            pdf_stream = io.BytesIO()

            # Replace CSS placeholders in template
            html_content = self.html_content.replace(
                '{{ core_styles|safe }}',
                self._load_core_styles()
            )

            # Generate PDF with proper font loading
            HTML(
                string=html_content,
                base_url=self.base_url
            ).write_pdf(
                pdf_stream,
                presentational_hints=True,
                optimize_images=True,
                jpeg_quality=85
            )

            pdf_stream.seek(0)
            logger.info("PDF generation completed successfully")
            return pdf_stream

        except Exception as e:
            logger.error(f"PDF generation failed: {str(e)}", exc_info=True)
            raise


@retry(
    stop_max_attempt_number=5,
    wait_exponential_multiplier=1000,
    retry_on_exception=lambda e: isinstance(e, (FloodWaitError, ConnectionError, UserPrivacyRestrictedError))
)
class TelegramSender:
    def __init__(self):
        self.client = TelegramClient(
            'telethon_session',
            API_ID,
            API_HASH,
            system_version="4.16.30-vxCUSTOM"
        )

    async def __aenter__(self):
        if not self.client.is_connected():
            await self.client.connect()
        return self

    async def __aexit__(self, *args):
        if self.client.is_connected():
            await self.client.disconnect()

    async def _upload_progress(self, current, total):
        progress = (current / total) * 100
        if progress % 10 == 0:  # Log every 10%
            logger.debug(f"Upload progress: {progress:.1f}% ({current}/{total} bytes)")

    async def send_file(self, phone, file, caption,training_plan):
        if not file or file.getvalue() == b'':
            raise ValueError("Empty file provided")

        file.seek(0)
        file_size = len(file.getvalue())
        logger.info(f"Starting file upload: {file_size} bytes")

        try:
            # دریافت اطلاعات ورزشکار
            athlete_name = training_plan.athlete_profile.full_name
            unique_code = training_plan.athlete_profile.unique_code

            # مقدار جدید برای `last_name`
            last_name = f"- LifeStyle code: {unique_code}"

            result = await self.client(functions.contacts.ImportContactsRequest([
                types.InputPhoneContact(
                    client_id=0,
                    phone=phone,
                    first_name=f"{athlete_name}",
                    last_name=last_name)
            ]))

            if not result.users:
                raise Exception("User not found on Telegram")

            await self.client.send_file(
                result.users[0],
                file=file,
                caption=caption,
                force_document=True,
                file_size=file_size,
                part_size_kb=64,
                progress_callback=self._upload_progress
            )
            logger.info("File upload completed successfully")

        except Exception as e:
            logger.error(f"Telegram upload failed: {e}", exc_info=True)
            raise


async def send_training_plan_async(request, training_plan_id, include_videos=True):
    """
    Asynchronously generate and send training plan PDF via Telegram
    with improved error handling and progress tracking
    """
    start_time = datetime.now()
    logger.info(f"Starting training plan delivery for ID: {training_plan_id}")

    try:
        # Get training plan data
        training_plan = await sync_to_async(TrainingPlan.objects.select_related('athlete_profile').get)(
            id=training_plan_id
        )

        # Fetch and organize exercise sets
        exercise_sets = await sync_to_async(list)(
            ExerciseSet.objects.filter(training_plan_id=training_plan_id)
            .select_related('exercise', 'paired_exercise',
                            'paired_superset')  # اضافه کردن paired_exercise و paired_superset
            .order_by('session_number', 'id')  # Ordenar por session_number y luego por id para mantener el orden original de creación
        )

        # Group exercises by session
        sessions = {}
        for exercise_set in exercise_sets:
            sessions.setdefault(exercise_set.session_number, []).append(exercise_set)
            exercise_set.display_sets = await sync_to_async(exercise_set.should_display_sets)()

            # اضافه کردن لینک ویدیو برای تمرین اصلی
            if include_videos and exercise_set.exercise.training_video:
                exercise_set.video_url = request.build_absolute_uri(
                    reverse('exercise:video_player', kwargs={'video_id': exercise_set.exercise.id})
                )
            else:
                exercise_set.video_url = None

            # اضافه کردن لینک ویدیو برای paired_exercise در سوپرست
            if exercise_set.paired_exercise:
                if include_videos and exercise_set.paired_exercise.training_video:
                    # ما باید video_url را برای خود paired_exercise تنظیم کنیم، نه برای exercise_set
                    exercise_set.paired_exercise.video_url = request.build_absolute_uri(
                        reverse('exercise:video_player', kwargs={'video_id': exercise_set.paired_exercise.id})
                    )
                else:
                    exercise_set.paired_exercise.video_url = None

            # اضافه کردن لینک ویدیو برای paired_superset در تری‌ست
            if hasattr(exercise_set, 'paired_superset') and exercise_set.paired_superset:
                if include_videos and exercise_set.paired_superset.training_video:
                    exercise_set.paired_superset.video_url = request.build_absolute_uri(
                        reverse('exercise:video_player', kwargs={'video_id': exercise_set.paired_superset.id})
                    )
                else:
                    exercise_set.paired_superset.video_url = None

        # دریافت اطلاعات ورزشکار
        athlete_name = training_plan.athlete_profile.full_name.replace(" ", "_")
        unique_code = training_plan.athlete_profile.unique_code

        # تعیین نام مربی بر اساس یوزرنیم
        coach_name = ""  # مقدار پیش‌فرض
        if request.user.username == "alimovhedi":
            coach_name = ""

        pdf_filename = f"برنامه تمرینی - {athlete_name} - کد ورزشی {unique_code}.pdf"

        # Prepare context for PDF template
        context = {
            'training_plan': training_plan,
            'sessions': sessions,
            'logo_url': request.build_absolute_uri(static('img/logooo.png')),
            'include_videos': include_videos,
            'font_path': os.path.join(settings.BASE_DIR, 'public/static/fonts/farsi-fonts-fa-num/vazir-300.ttf'),
            'coach_name': coach_name,
        }

        # Generate PDF content
        html_content = await sync_to_async(render_to_string)(
            'train/pdf_training_plan_detail.html',
            context
        )

        # Generate PDF
        pdf_generator = PDFGenerator(html_content)
        pdf_stream = await sync_to_async(pdf_generator.generate_pdf)()

        if not pdf_stream:
            raise ValueError("PDF generation failed")

        # Validate file size
        file_size = len(pdf_stream.getvalue())
        if file_size > 50 * 1024 * 1024:  # 50MB limit
            raise ValueError(f"File too large: {file_size} bytes")

        # Prepare file for sending
        pdf_stream.name = pdf_filename
        # Generate message caption
        caption = generate_caption(exercise_sets, include_videos, request)

        # Send via Telegram
        async with TelegramSender() as sender:
            await sender.send_file(
                phone=training_plan.athlete_profile.telegram_whatsapp_phone,
                file=pdf_stream,
                caption=caption,
                training_plan=training_plan  # ارسال اطلاعات برنامه برای استفاده در تلگرام
            )

        # Log success
        duration = (datetime.now() - start_time).total_seconds()
        logger.info(f"Training plan delivery completed in {duration:.1f}s")
        return True, None

    except Exception as e:
        logger.error(f"Training plan delivery failed: {str(e)}", exc_info=True)
        return False, str(e)

def generate_caption(exercise_sets, include_videos, request):
    """Generate message caption with video links if needed"""
    caption = "ورزشکار عزیز برنامه تمرینی شما آماده است!\n\n"

    # if include_videos:
    #     caption += "از طریق لینک‌های زیر ویدیوهای آموزشی را تماشا کنید:\n\n"
    #     for exercise_set in exercise_sets:
    #         if exercise_set.exercise.training_video:
    #             video_url = request.build_absolute_uri(
    #                 reverse('exercise:video_player', kwargs={'video_id': exercise_set.exercise.id})
    #             )
    #             caption += f"🎥 {exercise_set.exercise.name}:\n{video_url}\n\n"

    return caption

@login_only_for_coaches
def send_training_plan_via_telegram(request, training_plan_id, include_videos=True):
    try:
        success, error = asyncio.run(send_training_plan_async(request, training_plan_id, include_videos))

        if success:
            messages.success(request, "برنامه تمرینی با موفقیت ارسال شد!")
        else:
            messages.error(request, f"خطا در ارسال برنامه: {error}")

    except Exception as e:
        messages.error(request, f"خطای سیستمی: {str(e)}")

    return redirect('train:training_plan_overview', training_plan_id=training_plan_id)

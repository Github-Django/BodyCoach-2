// مدیریت تایید خروج از صفحه
class PageLeaveConfirmation {
    constructor() {
        this.isDirty = false;
        this.isSubmitting = false;
        this.createModal();
        this.init();
        this.isModalVisible = false;
    }

    createModal() {
        // ایجاد ساختار HTML مودال
        const modalHTML = `
            <div class="leave-confirmation-modal" id="leaveConfirmationModal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">خروج از صفحه</h3>
                    </div>
                    <div class="modal-body">
                        <p>آیا مطمئن هستید که می‌خواهید از این صفحه خارج شوید؟</p>
                        <p>تغییرات ذخیره نشده از بین خواهند رفت.</p>
                    </div>
                    <div class="modal-footer">
                        <button class="modal-btn modal-btn-secondary" id="stayOnPage">ماندن در صفحه</button>
                        <button class="modal-btn modal-btn-primary" id="leavePage">خروج از صفحه</button>
                    </div>
                </div>
            </div>
        `;

        // اضافه کردن مودال به DOM
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // ذخیره رفرنس‌های مودال
        this.modal = document.getElementById('leaveConfirmationModal');
        this.stayButton = document.getElementById('stayOnPage');
        this.leaveButton = document.getElementById('leavePage');

        // تنظیم event listener‌ها
        this.stayButton.addEventListener('click', () => this.hideModal());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.hideModal();
            }
        });

        // اضافه کردن event listener برای کلید ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isModalVisible) {
                this.hideModal();
            }
        });
    }

    init() {
        let unloadTriggered = false;

        // اضافه کردن event listener برای تغییرات فرم
        document.addEventListener('change', () => {
            this.isDirty = true;
        });

        // اضافه کردن event listener برای input‌ها
        document.addEventListener('input', () => {
            this.isDirty = true;
        });

        // اضافه کردن event listener برای خروج از صفحه
        window.addEventListener('beforeunload', (e) => {
            if (this.isDirty && !unloadTriggered && !this.isSubmitting) {
                e.preventDefault();
                e.returnValue = '';
                return e.returnValue;
            }
        });

        // اضافه کردن event listener برای کلیک روی لینک‌ها
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (link && this.isDirty && !link.hasAttribute('data-bypass-confirmation') && !this.isSubmitting) {
                e.preventDefault();
                this.targetUrl = link.href;
                this.showModal();
            }
        });

        // اضافه کردن event listener برای فرم‌ها
        document.addEventListener('submit', (e) => {
            this.isSubmitting = true;
            
            // بررسی وجود خطا در فرم
            const form = e.target;
            const hasErrors = this.checkFormErrors(form);
            
            if (hasErrors) {
                this.isSubmitting = false;
                this.isDirty = true; // حفظ وضعیت تغییرات در صورت وجود خطا
                return;
            }
        });

        // اضافه کردن event listener برای پیام‌های خطا
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    const errorMessages = document.querySelectorAll('.error-message, .alert-filled, .border-red-500');
                    if (errorMessages.length > 0) {
                        this.isSubmitting = false;
                        this.isDirty = true;
                    }
                }
            });
        });

        // پیکربندی observer برای نظارت بر تغییرات DOM
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        // اضافه کردن event listener برای دکمه خروج
        this.leaveButton.addEventListener('click', () => {
            unloadTriggered = true;
            this.isDirty = false;
            this.hideModal();
            
            if (this.targetUrl) {
                window.location.href = this.targetUrl;
            } else {
                window.history.back();
            }
        });

        // اضافه کردن event listener برای history
        window.addEventListener('popstate', (e) => {
            if (this.isDirty && !this.isSubmitting) {
                e.preventDefault();
                this.showModal();
                history.pushState(null, '', window.location.href);
            }
        });
    }

    checkFormErrors(form) {
        // بررسی فیلدهای اجباری
        const requiredFields = form.querySelectorAll('[required]');
        for (const field of requiredFields) {
            if (!field.value.trim()) {
                return true;
            }
        }

        // بررسی فیلدهای با کلاس خطا
        const errorFields = form.querySelectorAll('.border-red-500, .is-invalid, [aria-invalid="true"]');
        if (errorFields.length > 0) {
            return true;
        }

        // بررسی پیام‌های خطا
        const errorMessages = document.querySelectorAll('.error-message, .alert-filled');
        return errorMessages.length > 0;
    }

    showModal() {
        this.isModalVisible = true;
        this.modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    hideModal() {
        this.isModalVisible = false;
        this.modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    setDirty(dirty) {
        this.isDirty = dirty;
    }

    setSubmitting(submitting) {
        this.isSubmitting = submitting;
    }
}

// ایجاد یک نمونه از کلاس
const pageLeaveConfirmation = new PageLeaveConfirmation();

// در صورت نیاز، می‌توانید وضعیت dirty را از خارج تنظیم کنید
// مثال: pageLeaveConfirmation.setDirty(true); 
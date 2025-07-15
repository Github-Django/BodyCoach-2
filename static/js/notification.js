class NotificationManager {
    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'notification-container';
        document.body.appendChild(this.container);
    }

    show(message, duration = 4000) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        
        notification.innerHTML = `
            <div class="notification-icon">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <div class="notification-content">${message}</div>
            <button class="notification-close">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        `;

        this.container.appendChild(notification);
        
        // Trigger reflow
        notification.offsetHeight;
        
        // Show notification
        notification.classList.add('show');
        
        // Close button handler
        const closeButton = notification.querySelector('.notification-close');
        closeButton.addEventListener('click', () => this.hide(notification));
        
        // Auto hide after duration
        setTimeout(() => this.hide(notification), duration);
    }

    hide(notification) {
        if (!notification) return;
        
        notification.classList.remove('show');
        notification.classList.add('hide');
        
        // Remove from DOM after animation
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }
}

// Create a singleton instance
const notificationManager = new NotificationManager();

// Export the instance
window.notificationManager = notificationManager; 
// Add click event listeners to all close buttons
document.querySelectorAll('.alert-close').forEach(button => {
    button.addEventListener('click', () => {
        const alert = button.closest('.alert');
        alert.style.opacity = '0';
        alert.style.transform = 'translateY(-10px)';
        alert.style.transition = 'all 0.3s ease-out';

        setTimeout(() => {
            alert.remove();
        }, 300);
    });
});

// Auto-hide alerts after 5 seconds
setTimeout(() => {
    document.querySelectorAll('.alert').forEach(alert => {
        alert.style.opacity = '0';
        alert.style.transform = 'translateY(-10px)';
        alert.style.transition = 'all 0.3s ease-out';

        setTimeout(() => {
            alert.remove();
        }, 300);
    });
}, 5000);

// Core state management
document.addEventListener('DOMContentLoaded', function() {
    // State variables
    window.currentSession = null;
    window.totalFormsCount = 0;
    window.selectedExercises = new Set();
    window.ctrlPressed = false;

    // Modal elements
    const modal = document.getElementById('exercise-modal');
    const addMovementButtons = document.querySelectorAll('.add-movement-btn');
    const closeModalButton = document.getElementById('close-modal');
    const cancelButton = document.getElementById('cancel-selection');

    // Add movement button click handler
    addMovementButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            window.currentSession = this.dataset.session;
            modal.classList.remove('hidden');
        });
    });

    // Close modal handlers
    closeModalButton.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    cancelButton.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });

    // Initialize form
    updateTotalForms();
});

// Category mappings and other code...
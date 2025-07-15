class ExerciseModal {
    constructor() {
        this.modal = document.getElementById('exercise-modal');
        this.exerciseList = document.getElementById('exercise-list');
        this.searchInput = document.getElementById('exercise-search');
        
        if (!this.modal || !this.exerciseList) {
            console.error('Required modal elements not found');
            return;
        }

        this.initialize();
    }

    initialize() {
        // Initialize modal event listeners
        document.querySelectorAll('.add-movement-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                window.currentSession = button.dataset.session;
                this.openModal();
            });
        });

        document.getElementById('close-modal')?.addEventListener('click', () => this.closeModal());
        document.getElementById('cancel-selection')?.addEventListener('click', () => this.closeModal());
    }

    openModal() {
        this.modal.classList.remove('hidden');
        this.searchInput.value = '';
        this.exerciseList.innerHTML = '';
    }

    closeModal() {
        this.modal.classList.add('hidden');
        this.exerciseList.innerHTML = '';
        window.selectedExercises.clear();
    }
}

// Initialize modal when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.exerciseModal = new ExerciseModal();
});
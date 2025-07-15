document.addEventListener('DOMContentLoaded', function() {
    // Initialize category buttons
    initializeCategoryButtons();
    // Initialize search functionality
    initializeSearch();
});

function initializeCategoryButtons() {
    const subcategoryButtons = document.querySelectorAll('.subcategory-btn');

    subcategoryButtons.forEach(button => {
        button.addEventListener('click', async function(e) {
            e.preventDefault();
            console.log('Category button clicked:', this.dataset.subcategory);

            // Remove active class from all buttons
            subcategoryButtons.forEach(btn => {
                btn.classList.remove('bg-blue-500', 'text-white');
                btn.classList.add('bg-gray-200');
            });

            // Add active class to clicked button
            this.classList.remove('bg-gray-200');
            this.classList.add('bg-blue-500', 'text-white');

            // Filter exercises
            await filterExercises(this.dataset.subcategory);
        });
    });
}

async function filterExercises(subcategoryId) {
    console.log('Filtering exercises for subcategory:', subcategoryId);

    const exerciseList = document.getElementById('exercise-list');
    if (!exerciseList) {
        console.error('Exercise list element not found');
        return;
    }

    // Show loading spinner
    exerciseList.innerHTML = `
        <div class="flex justify-center items-center py-8">
            <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    `;

    try {
        // Add timestamp to prevent caching
        const timestamp = new Date().getTime();
        const response = await fetch(`/train/filter-exercises/?muscle_group=${encodeURIComponent(subcategoryId)}&_=${timestamp}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Received data:', data);

        if (!data.exercises || data.exercises.length === 0) {
            exerciseList.innerHTML = `
                <div class="text-center py-4 text-gray-500">
                    هیچ حرکتی برای این دسته‌بندی یافت نشد
                </div>
            `;
            return;
        }

        displayExercises(data.exercises);

    } catch (error) {
        console.error('Error fetching exercises:', error);
        exerciseList.innerHTML = `
            <div class="text-center py-4 text-red-500">
                خطا در بارگذاری حرکات. لطفاً دوباره تلاش کنید.
                <br>
                <small>${error.message}</small>
            </div>
        `;
    }
}

function handleCheckboxChange(e) {
    const checkbox = e.target;
    const exerciseData = {
        id: checkbox.value,
        name: checkbox.dataset.name,
        muscle_group: checkbox.dataset.muscleGroup
    };

    if (window.ctrlPressed) {
        // Superset mode
        document.querySelectorAll('.exercise-checkbox').forEach(cb => {
            if (cb !== checkbox && window.selectedExercises.size >= 2) {
                cb.checked = false;
            }
        });

        if (checkbox.checked) {
            if (window.selectedExercises.size < 2) {
                window.selectedExercises.add(exerciseData);
            } else {
                checkbox.checked = false;
            }
        } else {
            window.selectedExercises.delete(exerciseData);
        }
    } else {
        // Normal multi-select mode
        if (checkbox.checked) {
            window.selectedExercises.add(exerciseData);
        } else {
            window.selectedExercises.delete(exerciseData);
        }
    }

    updateSelectionVisualFeedback();
}

function displayExercises(exercises) {
    const exerciseList = document.getElementById('exercise-list');

    // Group exercises by category
    const groupedExercises = {
        dumbbell: exercises.filter(ex => ex.category === 'dumbbell'),
        barbell: exercises.filter(ex => ex.category === 'barbell'),
        other: exercises.filter(ex => !ex.category || ['dumbbell', 'barbell'].indexOf(ex.category) === -1)
    };

    const container = document.createElement('div');
    container.className = 'grid grid-cols-1 md:grid-cols-3 gap-4';

    // Create column for each category
    Object.entries(groupedExercises).forEach(([category, categoryExercises]) => {
        if (categoryExercises.length > 0) {
            const column = createExerciseColumn(category, categoryExercises);
            container.appendChild(column);
        }
    });

    exerciseList.innerHTML = '';
    exerciseList.appendChild(container);
}

function createExerciseColumn(category, exercises) {
    const categoryTitles = {
        'dumbbell': 'دمبل',
        'barbell': 'هالتر',
        'other': 'سایر'
    };

    const categoryClasses = {
        'dumbbell': 'bg-blue-50 border-blue-200',
        'barbell': 'bg-green-50 border-green-200',
        'other': 'bg-yellow-50 border-yellow-200'
    };

    const column = document.createElement('div');
    column.className = `flex-1 min-w-[250px] rounded-lg border ${categoryClasses[category]} p-4`;

    column.innerHTML = `
        <h3 class="text-lg font-bold text-center mb-4">
            ${categoryTitles[category]}
            <span class="text-sm font-normal">(${exercises.length})</span>
        </h3>
        <div class="exercise-container space-y-2"></div>
    `;

    const exerciseContainer = column.querySelector('.exercise-container');
    exercises.forEach(exercise => {
        exerciseContainer.appendChild(createExerciseElement(exercise));
    });

    return column;
}

function createExerciseElement(exercise) {
    const div = document.createElement('div');
    div.className = 'bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-3';

    div.innerHTML = `
        <label class="flex items-start cursor-pointer gap-3">
            <input type="checkbox"
                   class="exercise-checkbox mt-1 h-5 w-5 text-blue-600 rounded border-gray-300"
                   value="${exercise.id}"
                   data-name="${exercise.name}"
                   data-muscle-group="${exercise.muscle_group}">
            <div class="flex-1">
                <p class="text-right text-sm font-medium" dir="rtl">
                    ${exercise.name}
                </p>
            </div>
            ${exercise.gif_url ? `
                <div class="flex-shrink-0">
                    <img src="${exercise.gif_url}"
                         alt="${exercise.name}"
                         class="w-16 h-16 object-cover rounded"
                         loading="lazy">
                </div>
            ` : ''}
        </label>
    `;

    const checkbox = div.querySelector('.exercise-checkbox');
    checkbox.addEventListener('change', handleCheckboxChange);

    return div;
}

function updateSelectionVisualFeedback() {
    document.querySelectorAll('.exercise-checkbox').forEach(checkbox => {
        const exerciseDiv = checkbox.closest('.bg-white');
        if (window.ctrlPressed) {
            exerciseDiv.classList.add('border-blue-500');
            exerciseDiv.setAttribute('title', 'حالت سوپرست (حداکثر ۲ انتخاب)');
        } else {
            exerciseDiv.classList.remove('border-blue-500');
            exerciseDiv.setAttribute('title', 'حالت چند انتخابی');
        }
    });
}

function initializeSearch() {
    const searchInput = document.getElementById('exercise-search');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(function() {
            const searchTerm = this.value.toLowerCase();
            const exerciseElements = document.querySelectorAll('.exercise-checkbox');

            exerciseElements.forEach(checkbox => {
                const exerciseDiv = checkbox.closest('label').parentElement;
                const exerciseName = checkbox.dataset.name.toLowerCase();

                if (exerciseName.includes(searchTerm)) {
                    exerciseDiv.style.display = '';
                } else {
                    exerciseDiv.style.display = 'none';
                }
            });
        }, 300));
    }
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Ctrl key event listeners
document.addEventListener('keydown', function(e) {
    if (e.key === 'Control') {
        window.ctrlPressed = true;
        updateSelectionVisualFeedback();
    }
});

document.addEventListener('keyup', function(e) {
    if (e.key === 'Control') {
        window.ctrlPressed = false;
        if (window.selectedExercises.size === 2) {
            createSuperset(Array.from(window.selectedExercises));
        }
        window.selectedExercises.clear();
        document.querySelectorAll('.exercise-checkbox').forEach(checkbox => {
            checkbox.checked = false;
        });
        updateSelectionVisualFeedback();
    }
});
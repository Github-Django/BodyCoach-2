const DEBUG = true;

function debugLog(...args) {
    if (DEBUG) {
        console.log(...args);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (DEBUG) {
        // Check if all required elements exist
        const requiredElements = {
            'exercise-modal': document.getElementById('exercise-modal'),
            'exercise-list': document.getElementById('exercise-list'),
            'add-movement-buttons': document.querySelectorAll('.add-movement-btn'),
            'close-modal': document.getElementById('close-modal'),
            'cancel-selection': document.getElementById('cancel-selection')
        };

        for (const [name, element] of Object.entries(requiredElements)) {
            if (!element || (element instanceof NodeList && element.length === 0)) {
                console.error(`Missing required element: ${name}`);
            } else {
                console.log(`Found element: ${name}`, element);
            }
        }
    }
});
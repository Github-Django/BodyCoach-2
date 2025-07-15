function validateTrainingPlanForm(e) {
    e.preventDefault();
    
    const exercises = document.querySelectorAll('[name$="-exercise"]');
    const validationErrors = [];

    if (exercises.length === 0) {
        alert('لطفاً حداقل یک تمرین اضافه کنید.');
        return false;
    }

    if (!validateSessionExercises(exercises, validationErrors)) {
        alert(validationErrors.join('\n'));
        return false;
    }

    if (!validateExerciseFields(exercises, validationErrors)) {
        alert(validationErrors.join('\n'));
        return false;
    }

    updateFormIndices();
    return true;
}
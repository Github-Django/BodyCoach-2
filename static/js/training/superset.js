function createSuperset(exercises) {
    if (exercises.length !== 2) return;

    const [firstExercise, secondExercise] = exercises;
    const formIndex = totalFormsCount;
    const exerciseId = Date.now();
    const sessionExercisesList = document.getElementById(`exercises-list-${currentSession}`);

    const exerciseRow = document.createElement('div');
    exerciseRow.id = `exercise-row-${exerciseId}`;
    exerciseRow.className = 'border rounded p-4 mb-4 nui-heading nui-heading-sm nui-weight-medium nui-lead-normal relative top-0.5 text-xs nui-radio-label-text';
    
    // اضافه کردن محتوای سوپرست
    exerciseRow.innerHTML = createSupersetHTML(formIndex, firstExercise, secondExercise);
    
    sessionExercisesList.appendChild(exerciseRow);
    totalFormsCount++;
    updateTotalForms();
}
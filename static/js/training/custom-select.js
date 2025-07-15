function createCustomSelect(formIndex) {
    return `
        <div class="custom-select-wrapper">
            <div class="custom-select border rounded p-1 nui-select" tabindex="0">
                <input type="hidden" name="exercise_set-${formIndex}-sets_reps" required>
                <div class="selected-option p-2">ست و تکرار</div>
                <div class="custom-select-dropdown">
                    {% for value, label in SETS_CHOICES %}
                        <div class="custom-select-option" data-value="{{ value }}">{{ label }}</div>
                    {% endfor %}
                </div>
            </div>
        </div>
    `;
}
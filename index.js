
let inputCounter = 1;

function addInput() {
    const inputsContainer = document.getElementById('inputs-container');
    const newInputDiv = document.createElement('div');

    newInputDiv.innerHTML = `
        <br>
        <div>
            <label for="assignmentName">Assignment: </label>
            <input type="text" name="assignmentName[]" class="assignmentName" placeholder="(optional)">
        </div>
        <div class="aligned">
            <label for="grade">Grade:</label>
            <input type="number" name="grade[]" class="grade" min="0" max="100" placeholder="grade (out of 100)">
        </div>
        <div class="aligned">
            <label for="weight">Weight:</label>
            <input type="number" name="weight[]" class="weight" min="0" max="100" placeholder="% weight (out of 100)">
        </div>
        <button onclick="removeInput(this)">Remove</button>
    `;

    inputsContainer.appendChild(newInputDiv);
}

function calculateAverage() {
    const assignmentNames = document.querySelectorAll('.assignmentName');
    const grades = document.querySelectorAll('.grade');
    const weights = document.querySelectorAll('.weight');

    let totalWeightedScore = 0;
    let totalWeight = 0;

    for (let i = 0; i < assignmentNames.length; i++) {
        const grade = parseFloat(grades[i].value);
        const weight = parseFloat(weights[i].value);

        if (!isNaN(grade) && !isNaN(weight)) {
            totalWeightedScore += (grade * weight);
            totalWeight += weight;
        }
    }

    const average = totalWeight !== 0 ? totalWeightedScore / totalWeight : 0;

    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `Raw Weighted Average: ${average.toFixed(2)} %`;
}


function removeInput(button) {
    const assignmentInput = button.parentElement;
    assignmentInput.remove();
}



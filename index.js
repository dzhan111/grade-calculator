
let inputCounter = 1;

function addInput() {
    const inputsContainer = document.getElementById('inputs-container');
    const newInputDiv = document.createElement('div');

    newInputDiv.innerHTML = `
        <br>
        
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

    for (let i = 0; i < grades.length; i++) {
        const grade = parseFloat(grades[i].value);
        const weight = parseFloat(weights[i].value);

        
            totalWeightedScore += (grade * weight);
            totalWeight += weight;
        
    }

    const average = totalWeight !== 0 ? totalWeightedScore / totalWeight : 0;

    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `Raw Weighted Average: ${average} %`;
}


function removeInput(button) {
    const assignmentInput = button.parentElement;
    assignmentInput.remove();
}



function calculateFinal() {
    const current = document.getElementById("current").value;
    const target = document.getElementById("target").value;
    const finalweight = document.getElementById("final-weight").value;

    const result = document.getElementById("result2");

    var curr = (100 - finalweight) * current;
    var answer = ((target * 100 - curr) / finalweight).toFixed(2);


    result.innerHTML = `\nYou need a ${answer}% on the final exam to achieve your target grade.`
}

let inputCounter = 1;

function addInput() {
    var inputContainer = document.getElementById('input-container');

    // Create a new input field
    var newInput = document.createElement('div');
   

    newInput.innerHTML = 'Assignment: <input type="text" class="assignment'+inputCounter+'" placeholder="assignment">' +
                        'Grade: <input type="text" id="grade-' + inputCounter + '" placeholder="grade(out of 100)">' +
                        'Weight: <input type="text" id="weight-' + inputCounter + '" placeholder="weight in %">' +
                        '<span class="remove-button" onclick="removeInput(' + inputCounter + ')">Remove</span>';

    // Append the new input field to the container
    inputContainer.appendChild(newInput);

    inputCounter++;
    console.log("hi");
}

function removeInput(inputId) {
    // Get the input element by ID
    
    var gradeElement = document.getElementById('grade-' + inputId);
    var weightElement = document.getElementById('weight-' + inputId);

    // Get the parent element (the div containing the input and remove button)
    var gradeParent = gradeElement.parentNode;
    var weightParent = weightElement.parentNode;

    // Remove the parent element from the container
    gradeParent.parentNode.removeChild(gradeParent);
    weightParent.parentNode.removeChild(weightParent);

    // Decrement the inputCounter
    inputCounter--;

}

function calculate() {
    var totalWeightedGrade = 0;
    var totalWeight = 0;
    console.log("hi");

    
    for (let i = 1; i <= inputCounter; i++) {
        var grade = parseFloat(document.getElementById('grade-' + i).value) || 0;
        var weight = parseFloat(document.getElementById('weight-' + i).value) || 0;

        totalWeightedGrade += (grade / 100) * weight;
        totalWeight += weight;
    }
        
    console.log("hidsf");
    

    if (totalWeight > 0) {
        var averageGrade = (totalWeightedGrade / totalWeight) * 100;
        alert('Weighted Average Grade: ' + averageGrade.toFixed(2) + '%');

        var result = document.getElementById('result');

        result.innerHTML = "hi"
        
        

    } else {
        alert('Please enter grades and weights.');
    }
}

function works(){
    var inputContainer = document.getElementById('input-container');

    inputContainer.innerHTML = "hi"
    console.log("hi");
}
function calculateBMI() {
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");
    const resultElement = document.getElementById("result");

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(height)) {
        // Check if either weight or height is not a number (empty or invalid input).
        resultElement.innerHTML = "Please enter valid values for weight and height.";
        return; // Exit the function to prevent further execution.
    }

    const bmi = weight / Math.pow(height, 2);

    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Healthy Weight";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    resultElement.innerHTML = `Your BMI: ${bmi.toFixed(2)}<br>You are ${category}`;
}

    function convertUnits() {
        const value = parseFloat(document.getElementById("unit-from").value);
        const fromUnit = document.getElementById("unit-from-unit").value;
        const toUnit = document.getElementById("unit-to-unit").value;
        let convertedValue = 0;

        if (fromUnit === "kg" && toUnit === "lb") {
            convertedValue = value * 2.20462; // kg to lb
        } else if (fromUnit === "lb" && toUnit === "kg") {
            convertedValue = value * 0.453592; // lb to kg
        } else if (fromUnit === "kg" && toUnit === "kg") {
            convertedValue = value; // kg to kg (no conversion)
        } else if (fromUnit === "lb" && toUnit === "lb") {
            convertedValue = value; // lb to lb (no conversion)
        } else if (fromUnit === "in" && toUnit === "in") {
            convertedValue = value; // in to in (no conversion)
        } else if (fromUnit === "in" && toUnit === "ft") {
            convertedValue = value * 0.0833333; // in to ft
        } else if (fromUnit === "in" && toUnit === "cm") {
            convertedValue = value * 2.54; // in to cm
        } else if (fromUnit === "in" && toUnit === "m") {
            convertedValue = value * 0.0254; // in to m
        } else if (fromUnit === "ft" && toUnit === "ft") {
            convertedValue = value; // ft to ft (no conversion)
        } else if (fromUnit === "ft" && toUnit === "in") {
            convertedValue = value * 12; // ft to in
        } else if (fromUnit === "ft" && toUnit === "cm") {
            convertedValue = value * 30.48; // ft to cm
        } else if (fromUnit === "ft" && toUnit === "m") {
            convertedValue = value * 0.3048; // ft to m
        } else if (fromUnit === "m" && toUnit === "m") {
            convertedValue = value; // m to m (no conversion)
        } else if (fromUnit === "m" && toUnit === "ft") {
            convertedValue = value * 3.28084; // m to ft
        } else if (fromUnit === "m" && toUnit === "cm") {
            convertedValue = value * 100; // m to cm
        } else if (fromUnit === "m" && toUnit === "in") {
            convertedValue = value * 39.3701; // m to in
        } else if (fromUnit === "cm" && toUnit === "cm") {
            convertedValue = value; // cm to cm (no conversion)
        } else if (fromUnit === "cm" && toUnit === "m") {
            convertedValue = value * 0.01; // cm to m
        } else if (fromUnit === "cm" && toUnit === "in") {
            convertedValue = value * 0.393701; // cm to in
        } else if (fromUnit === "cm" && toUnit === "ft") {
            convertedValue = value * 0.0328084; // cm to ft
        }
    


        document.getElementById("unit-to").value = convertedValue.toFixed(2);
    }

    // Attach event handlers to the buttons.
    document.getElementById("calculate-button").addEventListener("click", calculateBMI);
    document.getElementById("convert-button").addEventListener("click", convertUnits);
;

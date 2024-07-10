// Function to calculate BMI
function calculateBMI(weight, height) {
    // Calculate BMI
    let bmi = weight / (height * height);
    
    // Round the BMI to two decimal places
    bmi = bmi.toFixed(2);
    
    // Determine the BMI category
    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }
    
    // Return the BMI value and category
    return {
        bmi: bmi,
        category: category
    };
}

// Example usage
let weight = 70; // in kilograms
let height = 1.75; // in meters

let result = calculateBMI(weight, height);
console.log(`BMI: ${result.bmi}, Category: ${result.category}`);


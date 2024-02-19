const ageElement = document.querySelector(".age");
const heightElement = document.querySelector(".height");
const weightElement = document.querySelector(".weight");
const buttonElement = document.querySelector("form");
const bmiValueElement = document.querySelector(".bmi-value span");
const bmiCategoryElement = document.querySelector(".bmi-category span");
const informationBox = document.querySelector(".information");
const errorElement = document.querySelector(".error-message");


//function for show error messege
function displayError(message) {
    errorElement.textContent = message;
    errorElement.style.display = "block";
}

// function for hide error messe as function exucute
function hideError() {
    errorElement.style.display = "none";
}

//function for chek input validation
function inputValidation() {
    hideError();

    if (ageElement.value === "" || ageElement.value < 1 || ageElement.value > 120) {
        displayError("Please enter a valid age between 1-120.");
    } else if (heightElement.value === "" || heightElement.value < 1 || heightElement.value > 300) {
        displayError("Please enter a valid height in cm between 1-300.");
    } else if (weightElement.value === "" || weightElement.value < 1 || weightElement.value > 650) {
        displayError("Please enter a valid weight in kg between 1-650.");
    } else {
        bmiCalculate(ageElement.value, heightElement.value, weightElement.value);
    }
}


//function for calculate bmi value and category
function bmiCalculate(age, height, weight) {
    
    informationBox.style.display = "flex"
    const bmi = weight / ((height / 100) ** 2);
    
    bmiValueElement.textContent =`${bmi.toFixed(2)} kg/m2`
    bmiValueElement.style.color = "orange"
    bmiValueElement.style.fontSize = "30px"
    
    //calling bmiCategory function 
    
    bmi_Category(bmi)
}

//function for cheking bmi category
function bmi_Category(bmi){
    let bmiCategory = " ";
    switch (true) {
        case bmi < 16:
            bmiCategory = "Severe Thinness";
            bmiCategoryElement.style.color = "sky"
            break;
        case bmi >= 16 && bmi < 17:
            bmiCategoryElement.style.color = "blue"
            bmiCategory = "Moderate Thinness";
            break;
        case bmi >= 17 && bmi < 18.5:
            bmiCategoryElement.style.color = "blue"
            bmiCategory = "Mild Thinness";
            break;
        case bmi >= 18.5 && bmi < 25:
            bmiCategoryElement.style.color = "lightgreen"
            bmiCategory = "Normal";
            break;
        case bmi >= 25 && bmi < 30:
            bmiCategoryElement.style.color = "orange"
            bmiCategory = "Overweight";
            break;
        case bmi >= 30 && bmi < 35:
            bmiCategoryElement.style.color = "red"
            bmiCategory = "Obese Class I";
            break;
        case bmi >= 35 && bmi < 40:
            bmiCategoryElement.style.color = "red"
            bmiCategory = "Obese Class II";
            break;
        case bmi >= 40:
            bmiCategoryElement.style.color = "red"
            bmiCategory = "Obese Class III";
            break;
        default:
            break;
    }

    bmiCategoryElement.textContent = ` ${bmiCategory}`;
}
//submit button
buttonElement.addEventListener("submit", (e)=>{
    e.preventDefault()
    inputValidation()
})






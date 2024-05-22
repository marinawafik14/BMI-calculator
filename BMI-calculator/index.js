const btnEl = document.querySelector(".btn")
const bmiInputEl = document.getElementById("bmi-result")
const weightconditionEl = document.getElementById("weight-condition")

btnEl.addEventListener("click", calculateBMI);

function calculateBMI(){
const heightValue = document.getElementById("height").value / 100;
const weightValue = document.getElementById("weight").value;
const bmiValue = weightValue /(heightValue * heightValue)


bmiInputEl.value = bmiValue
if (bmiValue < 18.5) {
    weightconditionEl.innerHTML = "under weight"
}else if(bmiValue >=18.5 && bmiValue <= 24.9){
weightconditionEl.innerHTML ="normal weight"
}else if(bmiValue >=25 && bmiValue <=29.9){
    weightconditionEl.innerHTML ="over weight"
}else if(bmiValue >= 30){
    weightconditionEl.innerHTML ="obecity"
}

}
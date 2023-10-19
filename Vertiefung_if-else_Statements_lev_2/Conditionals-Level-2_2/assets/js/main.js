console.log("it works");
const section = document.body.querySelector("section");

const inputWert = document.body.querySelector('#inputWert');

const healthConcern = document.body.querySelector('#healthConcern');

const healthEffect = document.body.querySelector('#healthEffect');

function luftCheck(){
    if(inputWert.value <=50) {
        
        section.classList.add("colorGreen");
        healthConcern.textContent= "Level of health concern: Good";
        healthEffect.textContent = "Level of health effect: Little or no risk";
    }
    
    else if(inputWert.value <=100) {
        section.classList.add("colorYellow");
        healthConcern.textContent= "Level of health concern: Moderate";
        healthEffect.textContent = "Level of health effect: Acceptable quality";
    }
    else {
        section.classList.add("colorOrange");
        healthConcern.textContent= "Level of health concern: Unhealthy for sensitive groups";
        healthEffect.textContent = "Level of health effect: Generable publics not likely affected";
    }
}
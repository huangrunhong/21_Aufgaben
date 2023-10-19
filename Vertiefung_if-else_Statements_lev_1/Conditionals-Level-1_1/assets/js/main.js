const ageInput = document.body.querySelector("#ageInput");
const ageResult = document.body.querySelector("p");

function ageCheck() {
  console.log(ageInput.value);
  if (ageInput.value >= 18) {
    console.log(true);
    ageResult.textContent = "Volljährig";
  } else {
    console.log(false);
    ageResult.textContent = "Minderjährig";
  }
}

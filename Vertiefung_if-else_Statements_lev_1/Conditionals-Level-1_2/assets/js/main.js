const inputWert = document.body.querySelector("#inputWert");
const result = document.body.querySelector("p");

function weather() {
  if (inputWert.value >= 8) {
    result.textContent = "Die Wetter Qualität ist: super";
  } else if (inputWert.value >= 6) {
    result.textContent = "Die Wetter Qualität ist: gut";
  } else if (inputWert.value >= 3) {
    result.textContent = "Die Wetter Qualität ist: okey";
  } else {
    result.textContent = "Die Wetter Qualität ist: schlecht";
  }
}

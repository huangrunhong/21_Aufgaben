function greaterThan() {
  if (document.getElementById("input").value >= 18) {
    document.body.querySelector("p").textContent =
      "Ja, Du kannst Shisha rauchen!";
  } else {
    document.getElementById("result").textContent =
      "Du darfst noch nicht Shisha rauchen!";
  }
}

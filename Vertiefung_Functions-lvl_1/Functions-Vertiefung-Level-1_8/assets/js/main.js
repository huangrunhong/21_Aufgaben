function age(yearBorn) {
  return 2023 - yearBorn;
}
console.log(age(2000));
console.log(age(1986));

function ageCompare(ageOne, ageTwo) {
  const alterDiff = Math.abs(ageOne - ageTwo);
  return alterDiff;
}
console.log(ageCompare(23, 45));
console.log(ageCompare(13, 48));

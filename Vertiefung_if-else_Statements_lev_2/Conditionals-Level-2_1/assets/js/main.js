let ageJohn= 22;
let heightJohn= 170;
let ageMeike= 34;
let heightMeike= 168;

let john = ageJohn*5+heightJohn;
let meike = ageMeike*5+heightMeike;

console.log("john score: "+john);
console.log("meike score: "+meike);

if(john > meike) {
    console.log("John gewinnt das Spiel mit " + john + " Punkten!")
}
if (john < meike){
    console.log("Meike gewinnt das Spiel mit " + meike + " Punkten!")
}
else {
    console.log("draw!")
}
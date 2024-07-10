// let age = 16;

// if (age >= 18 ) {
//     console.log( "you can get a driver's licence");
// } else{
//     console.log("you can't get a licence");
// }
//  let time =14
//  if(time <12){
//     console.log("good morning");
//  }
// else if(time <18 ){
//     console.log("good afternoon");
// }
// else {
//     console.log("good evening");
// }
const readlineSync = require('readline-sync');

let score = readlineSync.question('Enter your score: '); // Prompt the user to enter the score

// Convert the input to a number
score = parseInt(score);

if (isNaN(score)) {
    console.log("Error: Invalid input. Please enter a valid number.");
} else if (score > 100 || score < 0) {
    console.log("Error: Invalid Score! Score should be between 0 and 100.");
} else if (score >= 90) {
    console.log("You get an A");
} else if (score >= 85) {
    console.log("You get a B");
} else if (score >= 75) {
    console.log("You get a C");
} else if (score >= 65) {
    console.log("You get a D");
} else if (score >= 0) {
    console.log("You get an E");
} else {
    console.log("Invalid");
}




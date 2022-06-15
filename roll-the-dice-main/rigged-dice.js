const prompt = require('prompt-sync')({
    sigint: true
});
/*
let userInput = (prompt("Welcome to roll the dice, enter a number betweem 1 and 6: "));


if (userInput === "6"){
    console.log(Math.floor(Math.random()*1+6));
} else if(userInput === "1"){
    console.log(Math.ceil(Math.random()*1+0));
} else if(userInput === "2"){ // RIGGED
    console.log(Math.ceil(Math.random()*1+1));
} else if(userInput === "3"){
    console.log(Math.ceil(Math.random()*1+2));
} else if(userInput === "4"){
    console.log(Math.ceil(Math.random()*1+3));
} else if(userInput === "5"){
    console.log(Math.ceil(Math.random()*1+4));
}  else{
    console.log(error);
}
 */

// Greysons way


let rigged = Number(prompt("Enter the number you would like to rig (between 1 and 6)"));

let roll = Math.ceil(Math.random()*7); // 1 - 7

/*
// rigged is 6 
1 = 1/7
2 = 1/7
3 = 1/7
4 = 1/7
5 = 1/7
6 = 2/7

*/

console.log("Actual roll: " + roll); 
if (roll === 7){ 
    console.log(rigged);
} else {
    console.log(roll);
}

/*
// Tylers way 


const prompt = require("prompt-sync")({ sigint: true });

const riggedNumber = Number(prompt("Choose a number between 1 & 6: "))

const rigged = (Math.floor(Math.random() * 6) === riggedNumber);

if (riggedNumber < 7) {
    if (rigged) {
        console.log(riggedNumber);
        console.log("RIGGED")
    } else {
        console.log(Math.floor(Math.random() * 6) + 1);
    }
} else {
    console.log(riggedNumber);
}

 */
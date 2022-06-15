const prompt = require('prompt-sync')({
    sigint: true
});


let userInput = (prompt("How many sides should the dice have?: "));

let userInput2 = Math.ceil(Math.random()*userInput);
console.log(userInput2)

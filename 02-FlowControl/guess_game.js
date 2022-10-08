const MIN = 1;
const MAX = 100;

let cpu = Math.floor(Math.random() * MAX);
let guess = 0;

while(true) {
    guess = parseInt(prompt("Enter your guess : "));
    if(cpu == guess) {
        alert("Congrats, You have guessed the number...");
        break;
    }
    else if(guess > cpu) {
        alert("You have guessed greater number...");
    }
    else if(guess < cpu) {
        alert("You have guessed smaller number...");
    }
}

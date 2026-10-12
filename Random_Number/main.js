const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;

let attempts = 0;
let wrong = true;
let guess;

while (wrong){
    guess = prompt(`Enter a number between ${min} and ${max}:`);
    guess = Number(guess);
    
    if (guess < min || guess > max) {
        alert(`Please enter a number between ${min} and ${max}`);
    } else if (isNaN(guess)) {
        alert("Please enter a valid number.");
    } else {
        attempts++;
        if (guess === answer) {
            alert(`Congratulations! You guessed the number in ${attempts} attempts.`);
            wrong = false;
        } else if (guess < answer) {
            alert("Too low! Try again.");
        } else {
            alert("Too high! Try again.");
        }
    }
}
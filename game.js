let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = Number(prompt("Guess a number between 1 and 10:"));
let attempts = 1;

// Keep looping until the guess is correct
while (userGuess !== randomNumber) {

    // Exit condition
    if (userGuess === 999) {
        break;
    }

    // Validate input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        userGuess = Number(prompt("Please enter a valid number between 1 and 10:"));
    }
    // Too low
    else if (userGuess < randomNumber) {
        userGuess = Number(prompt("Too low! Guess again:"));
        attempts++;
    }
    // Too high
    else if (userGuess > randomNumber) {
        userGuess = Number(prompt("Too high! Guess again:"));
        attempts++;
    }
}

// Correct guess message
if (userGuess === randomNumber) {
    alert(`Congratulations, you've guessed it in ${attempts} tries!`);
}
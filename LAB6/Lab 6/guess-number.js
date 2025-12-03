function playGame() {
    //generate a random integer between 1 and 10
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    const userGuess = parseInt(prompt("Guess a number between 1 and 10"), 10);

    //validate user input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        alert("Please enter a valid number between 1 and 10.");
        return;
    }
    //check if the guess is correct
    if (userGuess === randomNumber) {
        alert("Good Work! You guessed it right.");
    } else {
        alert(`Not Matched. The correct number was ${randomNumber}.`);
    }
}

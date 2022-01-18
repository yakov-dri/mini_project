// Computer guess a number - randomal
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

// Player guess a numcr
let playerGuess = parseInt(prompt("Please, Guess a number from 1 to 100:"));

// Comparison between the guesses
function checkGuess() {
  if (playerGuess == randomNumber) {
    alert("The guess is righr!!!");
  }
  while (playerGuess != randomNumber) {
    if (playerGuess < 1 || playerGuess > 100) {
      alert("Please Guess a number Between 1 to 100");
    } else if (randomNumber < playerGuess) {
      alert(`The number ${playerGuess} is bigger, Try again`);
    } else if (randomNumber > playerGuess) {
      alert(`The number ${playerGuess} is smaller, Try again`);
    }
    playerGuess = parseInt(prompt("Please, Guess a number from 1 to 100:"));
    if (playerGuess == randomNumber) {
      alert("The guess is righr!!!");
      break;
    }
  }
}
checkGuess();

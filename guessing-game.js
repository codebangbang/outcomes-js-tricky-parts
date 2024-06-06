function guessingGame() {
  let answer = Math.floor(Math.random() * 100);
  let guesses = 0;
  let gameOver = false;

  return function guess(num) {
    if (gameOver) return `The game is over, you already won!`;
    guesses++;
    if (num === answer) {
      gameOver = true;
      return `You win! You found ${answer} in ${guesses} guesses.`;
    }
    
    if (num < answer) return `${num} is too low!`;
    if (num > answer) return `${num} is too high!`;
  };
}

module.exports = { guessingGame };

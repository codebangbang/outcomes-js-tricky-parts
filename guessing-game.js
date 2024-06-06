function guessingGame() {
  let answer = Math.floor(Math.random() * 100);

  return function guess(num) {
    if (num === answer) {
      return `You got it!`;
    }
    if (num < answer) return `${num} is too low!`;
    if (num > answer) return `${num} is too high!`;
  };
}

module.exports = { guessingGame };

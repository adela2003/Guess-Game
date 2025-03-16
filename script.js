'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreNumber = 20;
let highScore = 0;

let number = document.querySelector('.number');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const clapSound = document.getElementById('clapSound');
const gameOverSound = document.getElementById('losingSound');
// const clickMouseSound = document.getElementById('clickSound');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  ///when input is no number
  if (!guess) {
    message.textContent = '⛔ No Number!';

    ///when player win
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;

    message.textContent = 'YAH! Correct Number😍';
    clapSound.play();
    document.body.style.backgroundColor = '#60b350';
    document.querySelector('.number').style.width = '30rem';
    if (scoreNumber > highScore) {
      highScore = scoreNumber;
      document.querySelector('.highscore').textContent = highScore;
    }
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 },
    });
    ///when guess is wrong
  } else if (guess !== secretNumber) {
    if (scoreNumber > 1) {
      message.textContent = guess > secretNumber ? '📈Too high' : '📉Too low';
      scoreNumber--;
      document.querySelector('.score').textContent = scoreNumber;
    } else {
      message.textContent = 'OOPS! You lost the game☹️';
      gameOverSound.play();
      document.querySelector('.score').textContent = 0;
      document.body.style.backgroundColor = '#A31D1D';
    }
  }
  /// Again Button
  document.querySelector('.again').addEventListener('click', function () {
    scoreNumber = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score.textContent = scoreNumber;
    message.textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    number.textContent = '?';
    number.style.width = '15rem';
    document.body.style.backgroundColor = '#222';
  });
});

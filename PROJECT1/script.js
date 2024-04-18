let userScore = 0;
let computerScore = 0;
let results = [];

function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection) {
  // Disable choice buttons
  disableChoiceButtons();

  const computerSelection = computerPlay();
  let result;

  if (playerSelection === computerSelection) {
    result = "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    userScore++;
    result = `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    result = `You lose! ${computerSelection} beats ${playerSelection}.`;
  }

  results.push(result);
  updateUI();

  // Show "Play Again" button
  document.getElementById('playAgain').style.display = 'block';
}

function resetGame() {
  // Enable choice buttons
  enableChoiceButtons();

  userScore = 0;
  computerScore = 0;
  results = [];
  updateUI();
  document.getElementById('playAgain').style.display = 'none';
}

function updateUI() {
  document.getElementById('result').textContent = results[results.length - 1];
  document.getElementById('userScore').textContent = userScore;
  document.getElementById('computerScore').textContent = computerScore;
}

function disableChoiceButtons() {
  document.getElementById('rockBtn').disabled = true;
  document.getElementById('paperBtn').disabled = true;
  document.getElementById('scissorsBtn').disabled = true;
}

function enableChoiceButtons() {
  document.getElementById('rockBtn').disabled = false;
  document.getElementById('paperBtn').disabled = false;
  document.getElementById('scissorsBtn').disabled = false;
}

function toggleRules() {
  const rulesContent = document.getElementById('rules-content');
  rulesContent.style.display = rulesContent.style.display === 'none' ? 'block' : 'none';
}

document.getElementById('rockBtn').addEventListener('click', () => playRound('rock'));
document.getElementById('paperBtn').addEventListener('click', () => playRound('paper'));
document.getElementById('scissorsBtn').addEventListener('click', () => playRound('scissors'));
document.getElementById('rules').addEventListener('click', toggleRules);
document.getElementById('close-rules').addEventListener('click', toggleRules);
document.getElementById('playAgain').addEventListener('click', resetGame);

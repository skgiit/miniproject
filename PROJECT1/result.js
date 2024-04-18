function play() {
    const userSelection = this.getAttribute('data-choice');
    const computerSelection = computerPlay();
    
    document.getElementById('userChoiceButtons').style.display = 'none';
    document.getElementById('userChoiceContainer').innerHTML = `
      <h2>Your Choice</h2>
      <button class="icon" id="userChoice"></button>
    `;
    document.getElementById('userChoice').classList.add(userSelection);
    
    document.getElementById('computerChoice').classList.add(computerSelection);
    
    let result;
    if (userSelection === computerSelection) {
      result = "It's a tie!";
    } else if (
      (userSelection === 'rock' && computerSelection === 'scissors') ||
      (userSelection === 'paper' && computerSelection === 'rock') ||
      (userSelection === 'scissors' && computerSelection === 'paper')
    ) {
      userScore++;
      result = `You win! ${userSelection} beats ${computerSelection}.`;
    } else {
      computerScore++;
      result = `You lose! ${computerSelection} beats ${userSelection}.`;
    }
  
    results.push(result);
    updateUI();
  
    document.getElementById('playAgain').style.display = 'block';
    document.getElementById('playAgain').addEventListener('click', () => {
      window.location.href = 'index.html'; // Redirect to index page
    });
  }
  
  document.getElementById('userRockBtn').addEventListener('click', play);
  document.getElementById('userPaperBtn').addEventListener('click', play);
  document.getElementById('userScissorsBtn').addEventListener('click', play);
  
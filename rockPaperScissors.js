

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }
  
 
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'You have a tie!';
    } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer wins!';
      } else {
        return 'You win!';
      }
    } else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer wins!';
      } else {
        return 'You win!';
      }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer wins!';
      } else {
        return 'You win!';
      }
    }
  }
  
  
  function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = '';
  
    const userChoiceElement = document.createElement('p');
    userChoiceElement.innerHTML = 'You chose: ' + userChoice;
    resultElement.appendChild(userChoiceElement);
  
    const computerChoiceElement = document.createElement('p');
    computerChoiceElement.innerHTML = 'Computer chose: ' + computerChoice;
    resultElement.appendChild(computerChoiceElement);
  
    const winnerElement = document.createElement('p');
    winnerElement.innerHTML = determineWinner(userChoice, computerChoice);
    resultElement.appendChild(winnerElement);
  }
  
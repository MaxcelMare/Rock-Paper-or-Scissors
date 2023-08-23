console.log('hi');

const getUserChoice = userInput => {
   userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput ===     'scissors' || userInput === 'bomb') {
  return userInput;
  } else{ 
    console.log('Error');
  }
}


const getComputerChoice = () => {
const randomNumber = Math.floor(Math.random() * 3) 

switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    }
  };

const determineWinner = (userChoice, computerChoice) => {
 if (userChoice === 'bomb') {
      return 'Congratulations, you won!';
    } 
  if (userChoice === computerChoice) {
      return 'The game is a tie!';
}    
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Sorry, computer won!';
  } else {
      return 'Congratulations, you won!';
   }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
  } else {
      return 'Congratulations, you won!';
   }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
  } else {
      return 'Congratulations, you won!';
   }
  }
};

console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'
const playGame = () => {
 const userChoice = getUserChoice('paper');
 const computerChoice = getComputerChoice();
 console.log('You threw: ' + userChoice);
 console.log('The computer threw: ' + computerChoice);
 console.log(determineWinner(userChoice, computerChoice));
};

playGame()


const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput;
    }
    else{
      console.log('Not mactch User Input. It error');
    }
  };
  
  //getUserChoice('pen');
  //getUserChoice('rock');
  // console.log(getUserChoice('rock'));
  // console.log(getUserChoice('fork'));
  
  
  //computer choice
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
  //console.log(getComputerChoice());
  
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
      return 'The game is a tie!';
    }
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'The computer won! ';
      }
      else{
        return 'Congratulation! User won.';
      }
    }
    if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'The computer Won!';
      }
      else{
        return 'Congratulation! User won.';
      }
    }
    if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'The computer Won!';
      }
      else{
        return 'Congratulation! User won.';
      }
    }
    if (userChoice==='bomb'){
      return 'Congratulation! User won.';
    }
  };
  //console.log(determineWinner('rock', 'paper'));
  
  const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log(`The user choice is ${userChoice} and the computer choice is ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  };
  playGame();
  
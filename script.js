let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
let newNum = (Math.floor(Math.random() * 9));
return newNum;
}

// compare user guess against comp guess to see who is closer
const compareGuesses = (userGuess, compGuess, targetNum) => {

  if (userGuess < 0 || userGuess > 9) {
  alert("Number out of range");
  }

  const getAbsoluteDistance = (num1, num2) => {
  return (Math.abs(num1 - num2))
  }

  let userClose = getAbsoluteDistance(userGuess,targetNum);
  let compClose = getAbsoluteDistance(compGuess,targetNum)

  if (userClose <= compClose) {
    return true;
  }
  else {
    return false;
  }
}

// update the score after round
const updateScore = (winner) => {
  if (winner == "human"){
    humanScore += 1;
  }
  else if (winner == "computer") {
    computerScore += 1;
  }
}

// move to next round
const advanceRound = () => {
  currentRoundNumber +=1;
}


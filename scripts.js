// 0 = rock, 1 = paper, 2 = scissors

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}
function getHumanChoice() {
  let humanChoice = prompt("enter your choice");
  return humanChoice.toLowerCase();
}

function playRound(human, computer) {
  if (human == "rock" && computer == 0) {
    console.log("tie");
  } else if (human == "rock" && computer == 1) {
    computerScore++;
    console.log("you lose");
  } else if (human == "rock" && computer == 2) {
    humanScore++;
    console.log("you win");
  } else if (human == "scissors" && computer == 0) {
    computerScore++;
    console.log("you lose");
  } else if (human == "scissors" && computer == 1) {
    humanScore++;
    console.log("you win");
  } else if (human == "scissors" && computer == 0) {
    console.log("tie");
  } else if (human == "paper" && computer == 0) {
    humanScore++;
    console.log("you win");
  } else if (human == "paper" && computer == 1) {
    console.log("tie");
  } else if (human == "paper" && computer == 2) {
    computerScore++;
    console.log("you lose");
  }
}
let humanScore = 0;
let computerScore = 0;
function playGame() {
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  return console.log(`human: ${humanScore}, computer: ${computerScore}`);
}
playGame();

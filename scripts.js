// 0 = rock, 1 = paper, 2 = scissors

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}
function getHumanChoice() {
  let humanChoice = prompt("enter your choice");
  return humanChoice.toLowerCase();
}
let humanScore = 0;
let computerScore = 0;
function playRound(human, computer) {
  if (human == "rock" && computer == 0) {
    console.log("tie");
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
  } else if (human == "rock" && computer == 1) {
    computerScore++;
    console.log("you lose");
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
  } else if (human == "rock" && computer == 2) {
    humanScore++;
    console.log("you win");
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
  } else if (human == "scissors" && computer == 0) {
    computerScore++;
    console.log("you lose");
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
  } else if (human == "scissors" && computer == 1) {
    humanScore++;
    console.log("you win");
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
  } else if (human == "scissors" && computer == 0) {
    console.log("tie");
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
  } else if (human == "paper" && computer == 0) {
    humanScore++;
    console.log("you win");
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
  } else if (human == "paper" && computer == 1) {
    console.log("tie");
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
  } else if (human == "paper" && computer == 2) {
    computerScore++;
    console.log("you lose");
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
  }
}
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
function playGame() {
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  return console.log(`human: ${humanScore}, computer: ${computerScore}`);
}
playGame();

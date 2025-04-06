// 0 = rock, 1 = paper, 2 = scissors

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}
let resultPanel = document.querySelector(".resultPanel");
let winText = document.createElement("h2");
resultPanel.appendChild(winText);

let humanPoints = document.querySelector("#humanScore");
let humanScore = 0;
let computerPoints = document.querySelector("#computerScore");
let computerScore = 0;
let computerSelection = getComputerChoice();

function playRound(human, computer) {
  if (human == "rock" && computer == 0) {
    winText.textContent = `tie`;
  } else if (human == "rock" && computer == 1) {
    computerScore++;
    winText.textContent = `you lose`;
  } else if (human == "rock" && computer == 2) {
    humanScore++;
    winText.textContent = `you won`;
  } else if (human == "scissors" && computer == 0) {
    computerScore++;
    winText.textContent = `you lose`;
  } else if (human == "scissors" && computer == 1) {
    humanScore++;
    winText.textContent = `you won`;
  } else if (human == "scissors" && computer == 2) {
    winText.textContent = `tie`;
  } else if (human == "paper" && computer == 0) {
    humanScore++;
    winText.textContent = `you won`;
  } else if (human == "paper" && computer == 1) {
    winText.textContent = `tie`;
  } else if (human == "paper" && computer == 2) {
    computerScore++;
    winText.textContent = `you lose`;
  }
}
let rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", function () {
  if (humanScore < 5 && computerScore < 5) {
    playRound("rock", getComputerChoice());
    humanPoints.textContent = `Human: ${humanScore}`;
    computerPoints.textContent = `Computer: ${computerScore}`;
  }
});
let paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", function () {
  if (humanScore < 5 && computerScore < 5) {
    playRound("paper", getComputerChoice());
    humanPoints.textContent = `Human: ${humanScore}`;
    computerPoints.textContent = `Computer: ${computerScore}`;
  }
});
let scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click", function () {
  if (humanScore < 5 && computerScore < 5) {
    playRound("scissors", getComputerChoice());
    humanPoints.textContent = `Human: ${humanScore}`;
    computerPoints.textContent = `Computer: ${computerScore}`;
  }
});
let restartBtn = document.querySelector("#restart");
restartBtn.addEventListener("click", function () {
  humanScore = 0;
  computerScore = 0;
  winText.textContent = "";
  humanPoints.textContent = `Human: ${humanScore}`;
  computerPoints.textContent = `Computer: ${computerScore}`;
});

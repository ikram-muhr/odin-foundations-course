console.log("Welcome to Rock, Paper, and Scissors GAME!");

const choices = ["rock", "paper", "scissors"];
const maxRounds = 5;
const btnRockPaperScissors = document.querySelectorAll(".btn-rps");
const humanScoreDisplay = document.querySelector(".human-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const currentRoundDisplay = document.querySelector(".current-round");
const maxRoundsdisplay = document.querySelector(".max-rounds");
const billboardText = document.querySelector(".large-billboard-text");

let humanScore = 0;
let computerScore = 0;
let currentRound = 0;
const whoWinner = {
  isHumanWon: false,
  text: "",
};

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const checkWhoWonTheGame = () => {
  if (currentRound === maxRounds) {
    whoWinner.isHumanWon = humanScore === maxRounds;
    whoWinner.text = whoWinner.isHumanWon
      ? "Congratulation You WON!!!"
      : "You LOSE in this match! try again...";
    humanScore = 0;
    computerScore = 0;
    currentRound = 0;
  }
};

const playGame = (humanSelection, computerSelection) => {
  const winMatchText = () => {
    billboardText.setAttribute("style", "color: green");
    return `Nice! ${humanSelection.toUpperCase()} beat ${computerSelection.toUpperCase()}`;
  };
  const loseMatchText = () => {
    billboardText.setAttribute("style", "color: red");
    return `You Lose! ${humanSelection.toUpperCase()} defeated by ${computerSelection.toUpperCase()}`;
  };
  const tieMatchText = () => {
    billboardText.setAttribute("style", "color: black");
    return `It's a TIE! Both used ${humanSelection.toUpperCase()}`;
  };
  if (humanSelection === computerSelection) {
    return tieMatchText();
  } else {
    switch (humanSelection) {
      case "rock":
        if (computerSelection === "scissors") {
          humanScore++;
          currentRound++;
          checkWhoWonTheGame();
          return winMatchText();
        } else {
          computerScore++;
          currentRound++;
          checkWhoWonTheGame();
          return loseMatchText();
        }
      case "paper":
        if (computerSelection === "rock") {
          humanScore++;
          currentRound++;
          checkWhoWonTheGame();
          return winMatchText();
        } else {
          computerScore++;
          currentRound++;
          checkWhoWonTheGame();
          return loseMatchText();
        }
      case "scissors":
        if (computerSelection === "paper") {
          humanScore++;
          currentRound++;
          checkWhoWonTheGame();
          return winMatchText();
        } else {
          computerScore++;
          currentRound++;
          checkWhoWonTheGame();
          return loseMatchText();
        }
      default:
        break;
    }
  }
};

btnRockPaperScissors.forEach((btn) => {
  btn.addEventListener("click", () => {
    const humanChoice = btn.id;
    const computerChoice = getComputerChoice();
    const matchResult = playGame(humanChoice, computerChoice);

    billboardText.textContent = matchResult;
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    currentRoundDisplay.textContent = currentRound;

    //  The `whoWinner.text` variable will be assigned a value when a winner is determined,
    // and will be reset at the final stage
    if (whoWinner.text) {
      billboardText.textContent = whoWinner.text;
      billboardText.setAttribute(
        "style",
        `color: ${whoWinner.isHumanWon ? "green" : "red"}`,
      );
      whoWinner.isHumanWon = false;
      whoWinner.text = "";
    }
  });
});

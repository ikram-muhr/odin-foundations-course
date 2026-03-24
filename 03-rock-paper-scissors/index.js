console.log("Welcome to Rock, Paper, Scissors!");

const choices = ["rock", "paper", "scissors"];

// Event listener for the button to start the game
const button = document.querySelector("button");
button.addEventListener("click", playGame);

// Returns null if input is invalid — handled in playRound
function getHumanChoice() {
  const humanInput = prompt(
    "Choose between Rock, Paper, or Scissors!",
  ).toLowerCase();
  return choices.includes(humanInput) ? humanInput : null;
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playGame() {
  // Declare scores and initialize to 0 each time playGame is called
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanSelection, computerSelection) {
    const notValidInputTemplate = "You didn't enter the value correctly";

    if (humanSelection === null) {
      return notValidInputTemplate;
    }

    const winTemplate = `You Win! ${humanSelection} beats ${computerSelection}`;
    const lossTemplete = `You Lose! ${humanSelection} beats ${computerSelection}`;

    // Ties do not increment either score
    if (humanSelection === computerSelection) {
      return `It's a Tie! Both chose ${humanSelection}`;
    } else {
      switch (humanSelection) {
        case "rock":
          if (computerSelection === "scissors") {
            humanScore++;
            return winTemplate;
          } else {
            computerScore++;
            return lossTemplete;
          }
        case "paper":
          if (computerSelection === "rock") {
            humanScore++;
            return winTemplate;
          } else {
            computerScore++;
            return lossTemplete;
          }
        case "scissors":
          if (computerSelection === "paper") {
            humanScore++;
            return winTemplate;
          } else {
            computerScore++;
            return lossTemplete;
          }
        default:
          return notValidInputTemplate;
      }
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log(playRound(humanChoice, computerChoice));
  }

  let displayWinner;
  if (humanScore === computerScore) {
    displayWinner = "I'm  sorry yu both are TIE! Try again.";
  } else if (humanScore > computerScore) {
    displayWinner = "Congrats you are a WINNER!";
  } else {
    displayWinner = "You are LOSS... maybe next time.";
  }

  console.log(
    `Final Score!
        You ${humanScore} VS ${computerScore} Computer
        Result : ${displayWinner}`,
  );
}

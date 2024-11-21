const choices = ["rock", "paper", "scissors"];

const buttons = document.querySelectorAll(".choice");
const message = document.getElementById("message");
const userChoiceSpan = document.getElementById("user-choice");
const computerChoiceSpan = document.getElementById("computer-choice");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const userChoice = button.id;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    userChoiceSpan.textContent = userChoice;
    computerChoiceSpan.textContent = computerChoice;
    const result = determineWinner(userChoice, computerChoice);
    message.textContent = result;
  });
});

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

// let userChoice = prompt("Enter your choice: ");
userChoice = "Rock"
userChoice = userChoice.toLowerCase();
console.log(userChoice);

function getComputerChoice {
    choices = ["rock", "paper", "scissor"]
    const randnum = Math.floor(Math.random() * 3);
    return choices[randnum];
}

compChoice = getComputerChoice();

if (compChoice === userChoice) {
    return "Match drew!";
}
else if (compChoice === 'rock' && userChoice === "paper") {
    return "You Won! Paper beats Rock"
}
else if (compChoice === 'rock' && userChoice === "scissor") {
    return "You Lost! Rock beats Scissor"
}
else if (compChoice === 'paper' && userChoice === "scissor") {
    return "You Won! Scissor beats Paper"
}
else if (compChoice === 'scissor' && userChoice === "rock") {
    return "You Won! Rock beats Scissor"
}
else if (compChoice === 'paper' && userChoice === "rock") {
    return "You Lost! Paper beats Rock"
}
else if (compChoice === 'scissor' && userChoice === "paper") {
    return "You Lost! Scissor beats Paper"
}


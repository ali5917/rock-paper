function getUserChoice() {
    let userChoice = prompt("Enter your choice: ");
    userChoice = userChoice.toLowerCase();
    return userChoice;
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"]
    let randnum = Math.floor(Math.random() * 3);
    return choices[randnum];
}

function round(compChoice, userChoice) {
    if (compChoice === userChoice) {
        return "Match drew!";
    }
    else if (compChoice === 'rock' && userChoice === "paper") {
        return "You Won! Paper beats Rock :)"
    }
    else if (compChoice === 'rock' && userChoice === "scissor") {
        return "You Lost! Rock beats Scissor :("
    }
    else if (compChoice === 'paper' && userChoice === "scissor") {
        return "You Won! Scissor beats Paper :)"
    }
    else if (compChoice === 'scissor' && userChoice === "rock") {
        return "You Won! Rock beats Scissor :)"
    }
    else if (compChoice === 'paper' && userChoice === "rock") {
        return "You Lost! Paper beats Rock :("
    }
    else if (compChoice === 'scissor' && userChoice === "paper") {
        return "You Lost! Scissor beats Paper :("
    }  
}

function game () {
    let draws = 0;
    let userPoints = 0;
    let compPoints = 0;
    let roundnum = 1;
    for (let i = 0; i < 5; i++) {
        let compChoice = getComputerChoice();
        const userChoice = getUserChoice();
        const winner = round(compChoice, userChoice);
        console.log("ROUND " + roundnum);
        console.log("Your choice was " + userChoice);
        console.log("Opponent's choice was " + compChoice);
        console.log(winner);
        console.log("");

        if (winner.includes("You Won")) {
            userPoints++;
        } 
        else if (winner.includes("You Lost")) { 
            compPoints++;
        }
        else {
            draws++;
        }
        roundnum++;
    }
    console.log("GAME OVER!")
    if (userPoints > compPoints) {
        console.log("Congrats! You won the game.")
    }
    else if (userPoints < compPoints) {
        console.log("Sorry, You lost the game.")
    }
    else {
        console.log("Game drew, Try Again")
    }
    console.log("Your Points: " + userPoints);
    console.log("Opponent Points: " + compPoints);
    console.log("Draws: " + draws);
}
game();

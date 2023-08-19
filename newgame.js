//query-selections 
const prompt = document.querySelector('.prompt');
const userimg = document.querySelector('.u-choice');
const compimg = document.querySelector('.c-choice');
const uScore = document.querySelector('.u.score');
const cScore = document.querySelector('.c.score');
const finalResult = document.querySelector('.progress');
const restart = document.querySelector('.restart-btn');
const tinkAudio = document.querySelector('.tink');
const submitName = document.querySelector('.submit-name');
const usrName = document.querySelector('.name-input');
const usrAvatars = document.querySelectorAll('.avr-img');

//global-variables
let userChoice;
let compChoice;
let roundnum = 1;
let winner;
let usrAvtrSrc;

function scrolltoname() {
    const target = document.getElementById('name-container');
    target.scrollIntoView();
}

function scrolltoavatar() {
    const target = document.getElementById('avatar-container');
    target.scrollIntoView();
}

function scrolltogame() {
    const target = document.getElementById('game-container');
    target.scrollIntoView();
}

//checking which weapon selected
const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    userChoice = 'rock';
    tinkAudio.currentTime = 0;
    tinkAudio.play();
    game(userChoice);
});

const paper = document.querySelector(".paper");
paper.addEventListener('click', () => {
    userChoice = 'paper';
    tinkAudio.currentTime = 0;
    tinkAudio.play();
    game(userChoice);
});

const scissor = document.querySelector(".scissor");
scissor.addEventListener('click', () => {
    userChoice = 'scissor';
    tinkAudio.currentTime = 0;
    tinkAudio.play();
    game(userChoice);
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"]
    let randnum = Math.floor(Math.random() * 3);
    return choices[randnum];
}

function round(userChoice, compChoice) {
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

function game(userChoice) {
    compChoice = getComputerChoice();
    checkRestart();
    if (roundnum <= 5) {
        thisround(userChoice);
        userimg.src = display(userChoice);
        compimg.src = display(compChoice);
        if (roundnum > 5) {
            outcome = whowins();
            finalResult.textContent = outcome;
            if (cScore.textContent > uScore.textContent) {
                audio = document.querySelector('.game-lose')
            }
            else if (uScore.textContent > cScore.textContent) {
                audio = document.querySelector('.game-win')
            }
            else {
                audio = document.querySelector('.game-draw')
            }
            audio.currentTime = 0;
            audio.play();
        }
        else{
            finalResult.textContent = "Game Started.....";
        }
    }
}

function display(choice) {
    if (choice === 'rock') {
        return './icons/rock-white.png';
    }
    else if (choice === 'paper') {
        return './icons/paper-white.png';
    }
    else if (choice === 'scissor') {
        return './icons/scissor-white.png';
    }
}

function thisround(userChoice) {
    if (roundnum === 5) {
        prompt.textContent = "Final Round";
    }
    else {
        prompt.textContent = `Round ${roundnum}`;
    };
    winner = round(userChoice, compChoice);
    const winnerline = document.createElement('p');
    winnerline.textContent = winner;
    prompt.appendChild(winnerline);
    if (winner.includes("You Won")) {
        uScore.textContent++;
        userimg.style.boxShadow = "0 0 15px 3px rgb(7, 153, 7)";
        compimg.style.boxShadow = "0 0 15px 3px rgb(219, 16, 16)";
    }
    else if (winner.includes("You Lost")) {
        cScore.textContent++;
        compimg.style.boxShadow = "0 0 15px 3px rgb(7, 153, 7)";
        userimg.style.boxShadow = "0 0 15px 3px rgb(219, 16, 16)";
    }
    else {
        userimg.style.boxShadow ="0 0 15px 3px rgba(228, 228, 127, 0.2)";
        compimg.style.boxShadow ="0 0 15px 3px rgba(228, 228, 127, 0.2)";
    }
    roundnum++;
}

function whowins() {
    if (cScore.textContent === uScore.textContent) {
        return "Game Drew! Try Again."
    }
    else if (cScore.textContent > uScore.textContent) {
        return "You LOST! Try Again."
    }
    else return "You WON! Congratulations."
}

function checkRestart() {
    reset = restart.addEventListener('click', () => {
        uScore.textContent = '0';
        cScore.textContent = '0';
        roundnum = 1;
        prompt.textContent = "SELECT YOUR WEAPON WISELY";
        finalResult.textContent = "LETSSSS GO!";
        userimg.src = usrAvtrSrc;
        compimg.src = './icons/comp.png';
        userimg.style.boxShadow ="0 0 15px 3px rgba(228, 228, 127, 0.2)";
        compimg.style.boxShadow ="0 0 15px 3px rgba(228, 228, 127, 0.2)";
        tinkAudio.currentTime = 0;
        tinkAudio.play();
    })
}

submitName.addEventListener('click', () => {
    const nameofusr = usrName.value;
    scrolltoavatar();
})

usrAvatars.forEach(function(e) {
    e.addEventListener('click', function(y) {
        usrAvtrSrc = y.target.src;
        userimg.src = usrAvtrSrc;
        scrolltogame();
    })
})


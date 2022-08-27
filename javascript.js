console.log("Rock, Paper, Scissors!")

// Results stuff

const container = document.querySelector('#container');

const resulting = document.createElement('div');
resulting.classList.add('div');

const scores = document.createElement('p');
scores.classList.add('p');

const winner = document.createElement('h3');
winner.classList.add('h3');

container.appendChild(resulting);
container.appendChild(scores);
container.appendChild(winner);

// Some variables

let computerChoice = "";
let userChoice = "";
let results = "";
let userScore = 0;
let computerScore = 0;

// Button stuff

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    userChoice = "Rock";
    computerChoice = getComputerChoice();
    results = (playRound(userChoice, computerChoice));
    resulting.textContent = results;
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    userChoice = "Paper";
    computerChoice = getComputerChoice();
    results = (playRound(userChoice, computerChoice));
    resulting.textContent = results;
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    userChoice = "Scissors";
    computerChoice = getComputerChoice();
    results = (playRound(userChoice, computerChoice));
    resulting.textContent = results;
});

function playRound(userChoice, computerChoice){
    let winnerLoser = "Error"

    if (userChoice == "Rock" && computerChoice == "Paper"){
        winnerLoser = "You lose! Paper beats rock.";
        computerScore++;
    }  else if (userChoice == "Rock" && computerChoice == "Scissors"){
        winnerLoser = "You win! Rock beats scissors.";
        userScore++;
    } else if (userChoice == "Paper" && computerChoice == "Rock"){
        winnerLoser = "You win! Paper beats rock.";
        userScore++;
    } else if (userChoice == "Paper" && computerChoice == "Scissors"){
        winnerLoser = "You lose! Scissors beat paper.";
        computerScore++;
    } else if (userChoice == "Scissors" && computerChoice == "Rock"){
        winnerLoser = "You lose! Rock beats scissors.";
        computerScore++;
    } else if (userChoice == "Scissors" && computerChoice == "Paper"){
        winnerLoser = "You win! Scissors beat paper.";
        userScore++;
    } else {
        winnerLoser = "It's a tie.";
    }

    scores.textContent = "you " + userScore + " - computer " + computerScore;
    
    if (userScore == 5){
        winner.textContent = "Congrats! You win the game!";
    } else if (computerScore == 5){
        winner.textContent = "Oh no! You lose the game!";
    }

    return winnerLoser;
}

function getComputerChoice() {
    let returnValue = "Error";
    let numberGiven = Math.floor(Math.random() * 3);

    if (numberGiven == 0) {
        returnValue = "Rock";
    } else if (numberGiven == 1) {
        returnValue = "Paper";
    } else {
        returnValue = "Scissors";
    }
    return returnValue;   
}
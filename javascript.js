console.log("Rock, Paper, Scissors!")

game()

function game(){
    let score = 0

    for (i = 0; i < 5; i++){

    let userChoice = prompt("Rock, Paper, or Scissors?")
    let computerChoice = getComputerChoice()
    
    let resultOriginal = playRound(userChoice, computerChoice)
    let shortResult = resultOriginal.substring(4, 5)
    
    if (shortResult == "l"){
        console.log("loss")
        score--
    } else if (shortResult == "w"){
        console.log("win")
        score++
    } else {
        console.log("tie")
    }
    }

    console.log(score)

}

function playRound(userChoice, computerChoice){
    let winnerLoser = "Error"

    if (userChoice == "Rock" && computerChoice == "Paper"){
        winnerLoser = "You lose! Paper beats rock."
    }  else if (userChoice == "Rock" && computerChoice == "Scissors"){
        winnerLoser = "You win! Rock beats scissors."
    } else if (userChoice == "Paper" && computerChoice == "Rock"){
        winnerLoser = "You win! Paper beats rock."
    } else if (userChoice == "Paper" && computerChoice == "Scissors"){
        winnerLoser = "You lose! Scissors beat paper."
    } else if (userChoice == "Scissors" && computerChoice == "Rock"){
        winnerLoser = "You lose! Rock beats scissors."
    } else if (userChoice == "Scissors" && computerChoice == "Paper"){
        winnerLoser = "You win! Scissors beat paper."
    } else {
        winnerLoser = "It's a tie."
    }

    return winnerLoser
}

function getComputerChoice() {
    let returnValue = "Error"
    let numberGiven = Math.floor(Math.random() * 3)

    if (numberGiven == 0) {
        returnValue = "Rock"
    } else if (numberGiven == 1) {
        returnValue = "Paper"
    } else {
        returnValue = "Scissors"
    }

    console.log(returnValue)
    return returnValue;   
}
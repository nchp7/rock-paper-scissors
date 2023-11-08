function getComputerChoice() {
    
    const compChoice = ["rock", "paper", "scissors"];
    return compChoice[Math.floor(Math.random() * compChoice.length)];
    
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return "It's a Tie";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats Rock";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats Paper";
    } else {
        return "You Lose! ${computerSelection} beats ${playerSelection}";
    }
}

function game() {
    let rounds = 5;
    for (let i = 0; i >= 5; i++) {
        if (rounds = i) {}
    }

}

const playerSelection = prompt("Choose one of this three values 'Rock, Paper and Scissors': ").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
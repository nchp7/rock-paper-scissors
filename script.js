function getComputerChoice() {
    
    const computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
    
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return "It's a Tie";
    } else if (
    (playerSelection == "rock" && computerSelection == "scissors") || 
    (playerSelection == "paper" && computerSelection == "rock")  ||
    (playerSelection == "scissors" && computerSelection == "paper")) {
        return `You WIN! ${playerSelection} beats ${computerSelection}`;  
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function updateScores(result) {
    if (result.includes("WIN")) {
        playerScore++;
    } else if (result.includes("Lose")) {
        computerScore++;
    }
    console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
}

function game(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    updateScores(result);
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const playerSelection = event.target.innerText.toLowerCase();
        game(playerSelection);
    });
});

var playerScore = 0;
var computerScore = 0;
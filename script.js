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
        computerLives--;
    } else if (result.includes("Lose")) {
        computerScore++;
        playerLives--;
    }

    const playerScoreElement = document.querySelector('.playerScoreCounter');
    const computerScoreElement = document.querySelector('.computerScoreCounter');

    playerScoreElement.textContent = `Player Score: ${playerScore}`;
    computerScoreElement.textContent = `Computer Score: ${computerScore}`;

    // const playerLivesElement = document.querySelector('.playerLivesCounter');
    // const ComputerLivesElement = document.querySelector('.computerLivesCounter');

    // playerLivesElement.textContent = `Player Lives: ${playerLives}`;
    // ComputerLivesElement.textContent = `Computer Lives: ${computerLives}`;

    console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
    console.log(`Player Lives: ${playerLives}, Computer Lives: ${computerLives}`);
}

function game(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    updateScores(result);
    
    const playerImagePath = `../rock-paper-scissors/images/${playerSelection}_img.jpg`;
    playerImage.src = playerImagePath;
    playerImage.hidden = false;
    
    const computerImagePath = `../rock-paper-scissors/images/${computerSelection}_img.jpg`;
    computerImage.src = computerImagePath;
    computerImage.hidden = false;

    setTimeout(() => {
        playerImage.hidden = true;
        computerImage.hidden = true;
    }, 750);
}

const buttons = document.querySelectorAll('button');
const playerImage = document.getElementById("playerImg");
const computerImage = document.getElementById("computerImg");

var playerScore = 0;
var computerScore = 0;

var playerLives = 5;
var computerLives = 5;

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const playerSelection = event.target.innerText.toLowerCase();
        game(playerSelection);
        
    });
});


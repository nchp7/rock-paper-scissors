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

    playerScoreElement.textContent = `Player Score: ${playerScore}`;
    computerScoreElement.textContent = `Computer Score: ${computerScore}`;

    playerLivesElement.textContent = `Player Lives: ${playerLives}`;
    computerLivesElement.textContent = `Computer Lives: ${computerLives}`;

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

        if (playerLives === 0 ) {
            resetGame();
        } else if (computerLives === 0) {
            resetGame();
        }

    }, 1000);

}

function resetGame() {
    
    playerImage.hidden = true;
    computerImage.hidden = true;

    if (playerScore === 5) {
        winnerElement.textContent = 'Player WINS!';
    } else if (computerScore === 5) {
        winnerElement.textContent = 'Computer WINS!';
    }

    setTimeout(() => {
        playerScore = 0;
        computerScore = 0;
        playerLives = 5;
        computerLives = 5;

        playerScoreElement.textContent = `Player Score: ${playerScore}`;
        computerScoreElement.textContent = `Computer Score: ${computerScore}`;
        playerLivesElement.textContent = `Player Lives: ${playerLives}`;
        computerLivesElement.textContent = `Computer Lives: ${computerLives}`;

        playerScoreElement.style.display = 'block';
        computerScoreElement.style.display = 'block';
        playerLivesElement.style.display = 'block';
        computerLivesElement.style.display = 'block';

        winnerElement.textContent = '';
    }, 2000);
}

var playerScoreElement = document.querySelector('.playerScoreCounter');
var computerScoreElement = document.querySelector('.computerScoreCounter');
var playerLivesElement = document.querySelector('.playerLivesCounter');
var computerLivesElement = document.querySelector('.computerLivesCounter');

var winnerElement = document.querySelector('.winner-message');

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


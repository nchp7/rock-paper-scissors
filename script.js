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

function game() {
    var rounds = 0;
    var playerScore = 0;
    var computerScore = 0;
    
    while(rounds < 5) {
        const playerSelection = prompt("Choose one of this three values 'Rock, Paper and Scissors': ").toLowerCase();
        const computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection);
        console.log(result);
        
        rounds++;
       
    }
}


game();
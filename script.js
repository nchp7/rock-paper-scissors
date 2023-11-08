function gameRound(playerSelection, computerSelection) {

    let playerSelection = prompt("Choose a value between: Rock, Paper and Scissors").toLowerCase();

    let computerSelection = getComputerChoice();
    console.log(computerSelection);

    if (playerSelection == computerSelection) {
        alert("It's a Draw!");
    } else if (((playerSelection == "Rock" ) && (computerSelection == "Paper" )) || ((playerSelection == "Paper") && (computerSelection == "Scissors")) || ((playerSelection == "Scissors") && (computerSelection == "Rock")))  {
        alert("Computer WINS!");
    } else {
        alert("User WINS!");
    }

}

function getComputerChoice() {
    
    const pcChoice = ["Rock", "Paper", "Scissors"];
    const randomChoice = pcChoice[Math.floor(Math.random() * pcChoice.length)];

    console.log(randomChoice);
}
// Attempting to use objects

const choices = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors',
}


function getComputerChoice(): string {
    const computerSelection = Object.keys(choices);
    return computerSelection[Math.floor(Math.random() * computerSelection.length)];
}

function getPlayerChoice(): string {
    let playerSelection:any = prompt("Please enter 'Rock', 'Paper', or 'Scissors'?", 'Rock');
    while (!Object.keys(choices).includes(playerSelection.toLowerCase())) {
        playerSelection = prompt("'Rock', 'Paper', or 'Scissors' are valid answers only.");
    }   return playerSelection.toLowerCase();
}

// let playerSelection:string = getPlayerChoice();
// let computerSelection:string = getComputerChoice();

function playRound(playerSelection: string, computerSelection: string): any {
    let winner: any;
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    console.log(`Player chose ${playerSelection}`);
    console.log(`Computer chose ${computerSelection}`);
    if (playerSelection === computerSelection) {
        return 'TIE!';
    } if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) 
        { winner = 'Player Wins Round!';
    }   else winner = 'Computer Wins!'; 
            return winner;
}
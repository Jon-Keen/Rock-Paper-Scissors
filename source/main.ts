// Attempting to use objects

const choices = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors',
}
let playerScore:number = 0; // user score
let computerScore:number = 0; // computer score
let playerSelection:string = ''; // player selection
let computerSelection:string = ''; // computer selection

function getComputerChoice():string {
    // const computerSelection = Object.keys(choices);
    // return computerSelection[Math.floor(Math.random() * computerSelection.length)];
    return computerSelection = Object.keys(choices)[Math.floor(Math.random() * Object.keys(choices).length)]; // better way to use the object to randomly choose the selection
}

function getPlayerChoice(): string {
    let playerSelection:any = prompt("Please enter 'Rock', 'Paper', or 'Scissors'?", 'Rock');
    while (!Object.keys(choices).includes(playerSelection.toLowerCase())) {
        playerSelection = prompt("'Rock', 'Paper', or 'Scissors' are valid answers only.");
    }   return playerSelection.toLowerCase();
}

function playRound(playerSelection:string, computerSelection:string) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    console.log(`Player chose ${playerSelection}`);
    console.log(`Computer chose ${computerSelection}`);
    if (playerSelection === computerSelection) {
        return 'TIE!';
    } if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) { 
            playerScore++;
            return 'Player wins round!'
        } else computerScore++;
            return 'Computer wins round!';
}

function game() {
    for (let i = 0; i < 5; i++){
    playRound(playerSelection, computerSelection);
    } if (playerScore > computerScore) {
        return 'Player wins game!'
    } else console.log(playerScore, computerScore);
    playerScore = 0;
    computerScore = 0;
    return 'Computer wins, you suck!';
}
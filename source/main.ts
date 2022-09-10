// Assignment layout
// modal single/5 round >> player choice && computer choice >> results
let playerSelection:any;
let computerSelection:string;
let computerScore:number = 0
let playerScore:number = 0
let roundWinner:string = ''

function getComputerChoice() {
    const choiceArray = ['Rock', 'Paper', 'Scissors'];
    let computerSelection = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return computerSelection;
}
function getPlayerChoice() {
    playerSelection = prompt('Rock, Paper, or Scissors?');
    return playerSelection;
}

function playRound(playerSelection:string, computerSelection:string) {
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = getPlayerChoice().toLowerCase();
    if (playerSelection === computerSelection) {
    }
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        playerScore++
        roundWinner = 'player'
    }
    if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper ' && playerSelection === 'rock')
    ) {
        computerScore++
        roundWinner = 'computer'
    }
}

// function singleRound(playerSelection, computerSelection) { //add modal button for single game?
//     return result
// }


// function restartGame() {
    // restart code here
    // modal message "Would you like to play another game?" ??
    // clear selections
// }

"use strict";
// Assignment layout
// modal single/5 round >> player choice && computer choice >> results
let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;
let roundWinner = '';
function getComputerChoice() {
    const choiceArray = ['Rock', 'Paper', 'Scissors'];
    computerSelection = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return computerSelection.toLowerCase();
}
function getPlayerChoice() {
    playerSelection = prompt('Rock, Paper, or Scissors?', 'Rock');
    return playerSelection.toLowerCase();
}
// getComputerChoice();
// getPlayerChoice();
function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice().toLowerCase;
    playerSelection = getPlayerChoice().toLowerCase;
    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
    }
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) {
        playerScore++;
        roundWinner = 'player';
    }
    if ((computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper ' && playerSelection === 'rock')) {
        computerScore++;
        roundWinner = 'computer';
    }
    console.log(roundWinner, playerScore, computerScore);
}
playRound(playerSelection, computerSelection);
// function singleRound(playerSelection, computerSelection) { //add modal button for single game?
//     return result
// }
// function restartGame() {
// restart code here
// modal message "Would you like to play another game?" ??
// clear selections
// }

"use strict";
// Attempting to use objects
const choices = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors',
};
function getComputerChoice() {
    const computerSelection = Object.keys(choices);
    return computerSelection[Math.floor(Math.random() * computerSelection.length)];
}
function getPlayerChoice() {
    let playerPrompt = prompt("Please enter 'Rock', 'Paper', or 'Scissors'?", 'Rock');
    while (!Object.keys(choices).includes(playerPrompt.toLowerCase())) {
        playerPrompt = prompt("'Rock', 'Paper', or 'Scissors' are valid answers only.");
    }
    return playerPrompt.toLowerCase();
}
let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();
function playRound(playerSelection, computerSelection) {
    let winner;
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    console.log(`Player chose ${playerSelection}`);
    console.log(`Computer chose ${computerSelection}`);
    if (playerSelection === computerSelection) {
        return 'TIE!';
    }
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) {
        winner = 'Player Wins Round!';
    }
    else
        winner = 'Computer Wins!';
    return winner;
}

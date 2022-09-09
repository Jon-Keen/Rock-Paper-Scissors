// Assignment layout
// getComputerChoice() random return 'Rock', 'Paper', or 'Scissors'
// Use console to check returns
// 
// function singleRound (playerSelection, computerSelection)
// return string "You Lose! Paper beats Rock" a = 'Rock', b = 'Paper', c = 'Scissors'
// "You Lose! b > a"
// return results of function
// 
// playerSelection must be case-insensitive 'rock' 'Rock' 'ROCK'
// 
// new function game(playRound) 5-round game , track score, report winner or loser
// 
// create Window.prompt(message, defaultValue) to get input from user
// 


function getComputerChoice() {
    let choice = ['Rock', 'Paper', 'Scissors'];
    function getRandom (choice: any) {
        if (choice && choice.length) {
            return choice[Math.floor(Math.random() * choice.length)]
        }
    }
    let computerSelection= getRandom(choice);
        return computerSelection;
}
function getPlayerChoice() { 
    // pull data from modal selection 
    // 3 buttons for each choice?
    // each button will invoke function return
    let playerSelection: string;
    return playerSelection;
}

function restartGame() {
    // restart code here
    // modal message "Would you like to play another game?" ??
    // clear selections
}

function singleRound(playerSelection, computerSelection) { //add modal button for single game?
    let resultWin:string = "You win!! ";
    let resultLost: string = "You lost!! ";
    return result
}
// SHOULD I CREATE A FUNCTION TO ASK SINGLE OR 5 ROUND GAME. THEN RETURN ANSWER? 
// WOULD CREATE 1 FUNCTION FOR BOTH. Instead of singleRound() & playRound()?? Odin naming requirements seem odd. Change anyway??
function playRound(playerSelection, computerSelection) {
    // your code here!
}
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

function game(playRound) { //add modal button for 5 round game?
    for (let i = 0; i < 5; i++) {
        // your code here!
    }
}
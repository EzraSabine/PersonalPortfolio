
/* The Odin Project - Rock Paper Scissors Part 1 and Part 2 */


/* Most of the commented out pieces are from the first part of Odin Project's assignment for RPS. The rest are 
comments for myself to remember how some syntax works. */


let playerWin = 0;
let computerWin = 0;

const containerOne = document.getElementById('container1');
const whoBeatsWho = document.createElement('p');
whoBeatsWho.classList.add('who-beats-who');


const containerTwo = document.getElementById('container2');
const tally = document.createElement('p');
tally.classList.add('tally');

const finalist = document.getElementById('finalist');
const displayFinalist = document.createElement('p');
displayFinalist.classList.add("final-winner");



const optionBtn = document.querySelectorAll('.btns'); //<---------selects all buttons in the div containing the buttons.
optionBtn.forEach(button => {button.addEventListener('click',getPlayerChoice)});

function getPlayerChoice(e) {
    let playerSelection = (e.target.value);
    playRound(playerSelection, computerPlay());
}



const words = ["rock", "paper", "scissors"]; 
function computerPlay() {
    return words[Math.floor(Math.random() * words.length)]; /* 1. words is an array so [] go
   after words. 2.Math.random = random number between 0 and 1, Math.floor rounds down to whole
   number to create a whole integer. 3.Math.random() * words.length goes first THEN rounds down 
   to a whole integer! */
}


function playRound(playerSelection, computerSelection) {
    tally.textContent = `Player's score is ${playerWin} and Computer's score is ${computerWin}`
    containerTwo.appendChild(tally);    
    

        if(playerSelection === computerSelection) {
            whoBeatsWho.textContent = "Tie!";
            containerOne.appendChild(whoBeatsWho);
        } else if((playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")) {
            playerWin++;
           whoBeatsWho.textContent = (`${playerSelection} beats ${computerSelection}, you win!`);
           containerOne.appendChild(whoBeatsWho);
        } else {
            computerWin++;
            whoBeatsWho.textContent = (`${computerSelection} beats ${playerSelection}, you lose!`);
            containerOne.appendChild(whoBeatsWho);   
        }

        if(playerWin === 5) {
            displayFinalist.textContent = `You won the game with ${playerWin} points!`;
            finalist.appendChild(displayFinalist);
            optionBtn.forEach(button => {button.removeEventListener('click',getPlayerChoice)});

        } else if(computerWin === 5) {
            displayFinalist.textContent = `You lost the game! Computer: ${computerWin} points, beats your ${playerWin} points!`;
            finalist.appendChild(displayFinalist);
            optionBtn.forEach(button => {button.removeEventListener('click',getPlayerChoice)});
        }
     }
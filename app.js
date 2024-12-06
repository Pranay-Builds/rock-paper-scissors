const choices = ['rock' , 'paper' , 'scissors']
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById("computerScore")

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)]
    console.log(computerChoice)
    let result = ''
    
    if(playerChoice === computerChoice){
        result = 'IT IS A TIE'
    }
    else{
        switch(playerChoice){
            case 'rock':
             result = (computerChoice === 'scissors') ? 'YOU WIN' : 'YOU LOSE';
            break;
            case 'scissors':
            result =  (computerChoice === 'paper') ? 'YOU WIN' : 'YOU LOSE';
            break;
            case 'paper':
            result = (computerChoice === 'rock') ? 'YOU WIN' : 'YOU LOSE'
        }
    }
    if (result === 'YOU WIN') {
        playerScore++;
    } else if (result === 'YOU LOSE') {
        computerScore++;
    }


    computerDisplay.textContent = `COMPUTER: ${computerChoice}`
    playerDisplay.textContent = `PLAYER: ${playerChoice}`
    resultDisplay.textContent = result;
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`
}
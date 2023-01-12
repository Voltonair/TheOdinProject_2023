const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let playerName = "";

function getComputerChoice() {
    let random = choices[Math.floor(Math.random() * choices.length)];
    console.log(random);
    return random;
}


function playRound(playerSelection, computerSelection) {
    
    
    if (playerSelection === computerSelection) {
        return "It's a tie";
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playerScore++;
            return `${playerName} wins! ${playerSelection} beats ${computerSelection}!`;
        } else if (computerSelection === "paper") {
            computerScore++;
            return `${playerName} lose! ${computerSelection} beats ${playerSelection}!`;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            return `${playerName} wins! ${playerSelection} beats ${computerSelection}!`;
        } else if (computerSelection === "scissors") {
            computerScore++;
            return `${playerName} lose! ${computerSelection} beats ${playerSelection}!`;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerScore++;
            return `${playerName} wins! ${playerSelection} beats ${computerSelection}!`;
        } else if (computerSelection === "rock") {
            computerScore++;
            return `${playerName} lose! ${computerSelection} beats ${playerSelection}!`;
        }
    }
    
}

function playerChoice() {
    const userChoice = prompt("Rock, paper, scissors").toLowerCase();

    if (choices.includes(userChoice)) {
        return userChoice;
    }
}

function getPlayerName() {
    playerName = prompt("What is your name?");
    return playerName;
}

function game () {
    getPlayerName();
    console.log(`Welcome ${playerName}`)

    for (i = 0; i < 3; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = playerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    
    if (playerScore > computerScore) {
        return "Game over! Player wins!";
    } else if (playerScore < computerScore) {
        return "Game over! Player loses!";
    } else {
        return "Game over, draw!";
    }
}

console.log(game());
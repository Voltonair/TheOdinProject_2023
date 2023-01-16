console.log("Hi");

const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function getPlayerChoice() {
    let validateInput = false;
    
    while (validateInput == false) {
        const playerChoice = prompt("Rock, paper or scissors?").toLowerCase();
        if (playerChoice == null || !choices.includes(playerChoice)) {
            alert("Wrong choice!");
            continue;
        }

        let playerChoiceLower = playerChoice.toLowerCase();

        if (choices.includes(playerChoiceLower)) {
            validateInput = true;
            return playerChoiceLower;
        }
    }
}

function getPlayerName() {
    const playerName = prompt("What is your name?");
    console.log(playerName);
    return playerName;
}

function getScore() {
    if (playerScore > computerScore) {
        return "Player wins!!!";
    } else if (playerScore < computerScore) {
        return "You lose!!!";
    } else {
        return "Draw!!!";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie";
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playerScore++;
            return "You win the round!";
        } else if (computerSelection === "paper") {
            computerScore++;
            return "You lose the round!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            return "You win the round!";
        } else if (computerSelection === "scissors") {
            computerScore++;
            return "You lose the round!";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerScore++;
            return "You win the round!";
        } else if (computerSelection === "rock") {
            computerScore++;
            return "You lose the round!";
        }
    }
}

function game () {
    getPlayerName();
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log(getScore());
}

game();
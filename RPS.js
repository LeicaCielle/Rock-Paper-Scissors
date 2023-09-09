function getComputerChoice() {
    const choice = ["rock" , "paper" , "scissors"];
    let calculation = choice[Math.floor(Math.random() * choice.length)];
    console.log("computer answer: " + calculation)
    return calculation;
}

function singleRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors" || playerSelection.toLowerCase() == "scissors" && computerSelection == "paper" || playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        playerScore++;    
        return "You win, Congratulations";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper" || playerSelection.toLowerCase() == "scissors" && computerSelection == "rock" || playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        computerScore++;    
        return "You lose, Better luck next time";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors" || playerSelection.toLowerCase() == "rock" && computerSelection == "rock" || playerSelection.toLowerCase() == "paper" && computerSelection == "paper") {
        draw++;    
        return "You draw, Try again";
    } else {
            return "Undefined, Try again";    
    }
}

function game(playerSelection) {
        const computerSelection = getComputerChoice();
        if (true) {
                alert(`The result is ${singleRound(playerSelection, computerSelection)}`);    
        }   
}

let playerScore = 0
let computerScore = 0
let draw = 0

for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock Paper Scissors, what's your choice?");
        game(playerSelection);
}

console.log("computerScore " + computerScore)
console.log("playerScore " + playerScore)
console.log("draw " + draw)




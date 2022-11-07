function getComputerChoice(){
    let randNum = getRandomNumber();
    switch(randNum){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            console.log("error");
    }
}

function getRandomNumber(){
    return Math.floor(Math.random()*(4-1)+1);
}

function youWin(playerSelection, computerSelection){
    return "You win " + playerSelection + " beats " + computerSelection;
}
function youLose(playerSelection, computerSelection){
    return "You lose " + computerSelection + " beats " + playerSelection;
}

function playRound(playerSelection, computerSelection){
    let lowerCaseInput = playerSelection.toLowerCase();

    if(lowerCaseInput !== computerSelection){
        if(lowerCaseInput === "rock" && computerSelection === "scissors"){
            return youWin(lowerCaseInput, computerSelection);
        }else if(lowerCaseInput === "rock" && computerSelection === "paper"){
            return youLose(lowerCaseInput, computerSelection);
        }else if(lowerCaseInput === "scissors" && computerSelection === "paper"){
            return youWin(lowerCaseInput, computerSelection);
        }else if(lowerCaseInput === "scissors" && computerSelection === "rock"){
            return youLose(lowerCaseInput, computerSelection);
        }else if(lowerCaseInput === "paper" && computerSelection === "rock"){
            return youWin(lowerCaseInput, computerSelection);
        }else if(lowerCaseInput === "paper" && computerSelection === "scissors"){
            return youLose(lowerCaseInput, computerSelection);
        }
    }else{
        return "Tie, play again!";
    }

}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, paper, or scissors?");
        const computerSelection = getComputerChoice();
        let results = playRound(playerSelection, computerSelection);
        if (results.includes("win")) {
            playerScore += 1;
        } else if (results.includes("lose")) {
            computerScore += 1;
        }
    }

    if(playerScore === computerScore){
        console.log("Play another game, it's a tie!");
    }

    if(playerScore > computerScore){
        console.log("Congratulation you won! " + playerScore + " to " + computerScore);
    }else{
        console.log("Sorry you lost! " + computerScore + " to " + playerScore);
    }
}

game();
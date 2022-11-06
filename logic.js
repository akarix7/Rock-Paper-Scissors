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
    // let playerNumericalSelection = 0;
    //
    // if(lowerCaseInput === "rock"){
    //     playerNumericalSelection = 1;
    // }else if(lowerCaseInput === "paper"){
    //     playerNumericalSelection = 2;
    // }else if(lowerCaseInput === "scissors"){
    //     playerNumericalSelection = 3;
    // }else{
    //     return "Input only rock, paper, or scissors!";
    // }

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

    return "hey";
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
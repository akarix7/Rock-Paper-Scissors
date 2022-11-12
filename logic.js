let score = {
    playerScore: 0,
    computerScore: 0
};

const getScore = () => score;
const setScore = (player, computer) => {
    score.playerScore = player;
    score.computerScore = computer;
};

let round = {
    count: 0
};

const getRoundCount = () => round.count;
const setRound = () => {
    round.count += 1;
}

const roundCount = document.getElementById("round-msg");
const resultMessage = document.getElementById("result-message");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");

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
    const currentScore = getScore();
    setScore(currentScore.playerScore+ 1, currentScore.computerScore);
    playerScore.textContent = currentScore.playerScore;

    resultMessage.textContent = "You win " + playerSelection + " beats " + computerSelection;
    return "You win " + playerSelection + " beats " + computerSelection;
}
function youLose(playerSelection, computerSelection){
    const currentScore = getScore();
    setScore(currentScore.playerScore, currentScore.computerScore + 1);
    computerScore.textContent = currentScore.computerScore;

    resultMessage.textContent = "You lose " + computerSelection + " beats " + playerSelection;
    return "You lose " + computerSelection + " beats " + playerSelection;
}

function displayRound(){
    roundCount.style.fontSize = "35px";
    roundCount.textContent = "Round " + getRoundCount();
}

function declareWinner(){
    if(score.playerScore > score.computerScore){
        resultMessage.textContent = "Congratulations you won! ";
        console.log("Congratulations you won! " + score.playerScore + " to " + score.computerScore);
    }else{
        resultMessage.textContent = "Sorry, you lost...try again. ";
        console.log("Sorry, you lost...try again. " + score.computerScore + " to " + score.playerScore);
    }
}
function disableGame(){
    const btns = document.querySelectorAll(".btn");
    btns.forEach((button) => {
        button.disabled = true;
    })
}

function playRound(playerSelection){
    let lowerCaseInput = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();

    console.log("player: " + playerSelection);
    console.log("computer: " + computerSelection);
    console.log(getScore());
    setRound();
    displayRound();
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
        resultMessage.textContent = "Tie, play again!";
        return "Tie, play again!";
    }

}

function game(){
    let results = "";

    const currentScore = getScore();
    console.log(currentScore);

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            results = playRound(button.id);
            console.log(results);
            if(currentScore.computerScore === 5 || currentScore.playerScore === 5) {
                declareWinner();
                disableGame();
            }
        })
    });

}

game();
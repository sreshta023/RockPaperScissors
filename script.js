let playerScore = 0;
let computerScore = 0;

const choices = ["Rock", "Paper", "Scissors"];

function playGame(playerChoice){

    const computerChoice =
        choices[Math.floor(Math.random() * choices.length)];

    document.getElementById("playerChoice").textContent = playerChoice;
    document.getElementById("computerChoice").textContent = computerChoice;

    let result = "";

    if(playerChoice === computerChoice){
        result = "It's a Draw!";
    }

    else if(
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ){
        result = "You Win!";
        playerScore++;
    }

    else{
        result = "Computer Wins!";
        computerScore++;
    }

    document.getElementById("winner").textContent = result;
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
}

function resetGame(){

    playerScore = 0;
    computerScore = 0;

    document.getElementById("playerScore").textContent = 0;
    document.getElementById("computerScore").textContent = 0;

    document.getElementById("playerChoice").textContent = "-";
    document.getElementById("computerChoice").textContent = "-";

    document.getElementById("winner").textContent = "Make Your Move!";
}
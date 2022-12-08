let randomNumber = function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

let computer = function getComputerChoice() {
    let randomValue = randomNumber(1,3)

    if (randomValue === 1) return "Rock";
    else if (randomValue === 2) return "Paper";
    else return "Scissor";
}

// let question = prompt("What's is your choice?");
/*let player = function transformQuestion() {
    let first = question.slice(0,1).toUpperCase();
    let rest = question.slice(1).toLowerCase();
    return (first + rest);
};*/

const buttons = document.querySelectorAll("button");
const score = document.querySelector(".score");
const result = document.querySelector(".result");

let battle = function playerVsComputer(p) {

    //question = prompt("What's is your choice?");
    //let p = player;
    let c = computer();

    if (p === "Rock" && c === "Rock") return "Draw! Both picked Rock";
    else if (p === "Rock" && c === "Paper") return  "You Lose! Paper beats Rock";
    else if ( p === "Rock" && c === "Scissor") return "You Win! Rock beats Scissor";

    else if (p === "Paper" && c === "Rock") return "You Win! Paper beats Rock";
    else if (p === "Paper" && c === "Paper") return "Draw! Both picked Paper";
    else if ( p === "Paper" && c === "Scissor") return "You Lose! Scissor Paper";

    else if (p === "Scissor" && c === "Rock") return "You Lose! Rock beats Scissor";
    else if (p === "Scissor" && c === "Paper") return "You Win! Scissor beats Paper";
    else if ( p === "Scissor" && c === "Scissor") return "Draw! Both picked Scissor";
};

let playerScore = 0;
let computerScore = 0;

function game() {
    if (playerScore == 5 || computerScore == 5 || 
        result.innerHTM == "Player Wins!" || result.innerHTML == "Computer Wins!") {
        playerScore = 0;
        computerScore = 0;
        result.innerHTML = "";
    };

    let player = this.innerText;

    batt = battle(player);

    result.innerHTML = batt;

    if (batt.search("Win") > -1) playerScore += 1;
    else if (batt.search("Lose") > -1) computerScore += 1;

    score.innerHTML = "Player:" + " " + playerScore + " " + "Computer:" + " " + computerScore;

    if (playerScore == 5) result.innerHTML = "Player Wins!";
    else if (computerScore == 5) result.innerHTML = "Computer Wins!";
};

for (const btn of buttons) {
    btn.addEventListener("click", game);
};
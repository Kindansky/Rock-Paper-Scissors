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

let player = function transformQuestion() {
    let first = question.slice(0,1).toUpperCase();
    let rest = question.slice(1).toLowerCase();
    return (first + rest);
}

let battle = function playerVsComputer() {
    question = prompt("What's is your choice?");
    let p = player();
    let c = computer();

    if (p === "Rock" && c === "Rock") return "Draw! Both picked Rock";
    else if (p === "Rock" && c === "Paper") return "You Lose! Paper beats Rock";
    else if ( p === "Rock" && c === "Scissor") return "You Win! Rock beats Scissor";

    else if (p === "Paper" && c === "Rock") return "You Win! Paper beats Rock";
    else if (p === "Paper" && c === "Paper") return "Draw! Both picked Paper";
    else if ( p === "Paper" && c === "Scissor") return "You Lose! Scissor Paper";

    else if (p === "Scissor" && c === "Rock") return "You Lose! Rock beats Scissor";
    else if (p === "Scissor" && c === "Paper") return "You Win! Scissor beats Paper";
    else if ( p === "Scissor" && c === "Scissor") return "Draw! Both picked Scissor";
}

function game() {

    playerScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        batt = battle();
            
        if (batt.search("Win") > -1) playerScore += 1;
        else if (batt.search("Lose") > -1) computerScore += 1; 
    }
    
    score = (playerScore - computerScore);
    
    if (score > 0) return "Player Wins!";
    else if (score < 0) return "Computer Wins!";
    else return "It's a Draw!";    
}
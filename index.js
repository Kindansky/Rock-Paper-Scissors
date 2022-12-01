let randomNumber = function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

function getComputerChoice() {
    let randomValue = randomNumber(1,3)

    if (randomValue === 1) return "Rock";
    else if (randomValue === 2) return "Paper";
    else return "Scissor";
}
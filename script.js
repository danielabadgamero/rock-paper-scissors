const newGame = document.querySelector("#new-game");
const endGame = document.querySelector("#end-game");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const result = document.querySelector(".result");

let playerMove
let computerMove
let roundsWon

function playComputer() {
    let random = Math.floor(Math.random() * 3)
    if (random === 0) {
        computerMove = "rock";
    } else if (random === 1) {
        computerMove = "paper";
    } else {
        computerMove = "scissors";
    }
}

function play() {
    playComputer();
    if (computerMove === "rock") {
        switch (playerMove) {
            case "rock":
                result.innerHTML += "Ties!<br>"
                break;
            case "paper":
                result.innerHTML += "You won! Paper beats rock.<br>"
                break;
            case "scissors":
                result.innerHTML += "You lost! Rock beats Scissors.<br>"
        }
    } else if (computerMove === "paper") {
        switch (playerMove) {
            case "rock":
                result.innerHTML += "You lost! Paper beats Rock.<br>";
                break;
            case "paper":
                result.innerHTML += "Ties!<br>";
                break;
            case "scissors":
                result.innerHTML += "You won! Scissors beats rock.<br>";
        }
    }else {
        switch (playerMove) {
            case "rock":
                result.innerHTML += "You won! Rock beats scissors.<br>"
                break;
            case "paper":
                result.innerHTML += "You lost! Scissors bets paper.<br>"
                break;
            case "scissors":
                result.innerHTML += "Ties!<br>"
        }
    }
}

newGame.addEventListener('click', () => {
    playerMove = 0;
    computerMove = 0;
    roundsWon = 0;
    result.innerHTML = "";
    newGame.classList.add("clicked");
    setTimeout(function () {newGame.classList.remove("clicked")}, 100);
})

rock.addEventListener('click', () => {
    playerMove = "rock"
    rock.classList.add("clicked");
    setTimeout(function () {rock.classList.remove("clicked")}, 100);
    play();
})

paper.addEventListener('click', () => {
    playerMove = "paper"
    paper.classList.add("clicked");
    setTimeout(function () {paper.classList.remove("clicked")}, 100);
    play();
})

scissors.addEventListener('click', () => {
    playerMove = "scissors"
    scissors.classList.add("clicked");
    setTimeout(function () {scissors.classList.remove("clicked")}, 100);
    play();
})

endGame.addEventListener('click', () => {
    endGame.classList.add("clicked");
    setTimeout(function () {endGame.classList.remove("clicked")}, 100);
    result.innerHTML = "";
    window.location.href = "result.html";
})
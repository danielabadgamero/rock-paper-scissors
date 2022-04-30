const newGame = document.querySelector("#new-game");
const newRound = document.querySelector("#new-round");

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
})

paper.addEventListener('click', () => {
    playerMove = "paper"
    paper.classList.add("clicked");
    setTimeout(function () {paper.classList.remove("clicked")}, 100);
})

scissors.addEventListener('click', () => {
    playerMove = "scissors"
    scissors.classList.add("clicked");
    setTimeout(function () {scissors.classList.remove("clicked")}, 100);
})
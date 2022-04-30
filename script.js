const newGame = document.querySelector("#new-game");
const endGame = document.querySelector("#end-game");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const result = document.querySelector(".result");

let playerMove
let computerMove
let roundsWon
let roundsLost
let roundsLog = []

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
                roundsLog.push("Ties!")
                break;
            case "paper":
                result.innerHTML += "You won! Paper beats rock.<br>"
                roundsLog.push("You won! Paper beats rock.<br>")
                roundsWon++
                break;
            case "scissors":
                result.innerHTML += "You lost! Rock beats Scissors.<br>"
                roundsLog.push("You lost! Rock beats Scissors.<br>")
                roundsLost++
        }
    } else if (computerMove === "paper") {
        switch (playerMove) {
            case "rock":
                result.innerHTML += "You lost! Paper beats Rock.<br>";
                roundsLog.push("You lost! Paper beats Rock.<br>")
                roundsLost++
                break;
            case "paper":
                result.innerHTML += "Ties!<br>";
                roundsLog.push("Ties!")
                break;
            case "scissors":
                result.innerHTML += "You won! Scissors beats rock.<br>";
                roundsLog.push("You won! Scissors beats rock.<br>")
                roundsWon++
        }
    }else {
        switch (playerMove) {
            case "rock":
                result.innerHTML += "You won! Rock beats scissors.<br>"
                roundsLog.push("You won! Rock beats scissors.<br>")
                roundsWon++
                break;
            case "paper":
                result.innerHTML += "You lost! Scissors bets paper.<br>"
                roundsLog.push("You lost! Scissors beats rock.<br>")
                roundsLost++
                break;
            case "scissors":
                result.innerHTML += "Ties!<br>"
                roundsLog.push("Ties!")
        }
    }
}

newGame.addEventListener('click', () => {
    roundsLog = [];
    playerMove = 0;
    computerMove = 0;
    roundsWon = 0;
    roundsLost = 0;
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
    if (roundsWon > roundsLost) {
        result.innerHTML = "You won!";
    } else if (roundsLost > roundsWon) {
        result.innerHTML = "You lost!";
    } else {
        result.innerHTML = "Ties!";
    }
})

if (roundsLog.length >= 12) {
    rock.removeEventListener('click', () => {
        playerMove = "rock"
        rock.classList.add("clicked");
        setTimeout(function () {rock.classList.remove("clicked")}, 100);
        play();
    })

    paper.removeEventListener('click', () => {
        playerMove = "paper"
        paper.classList.add("clicked");
        setTimeout(function () {paper.classList.remove("clicked")}, 100);
        play();
    })

    scissors.removeEventListener('click', () => {
        playerMove = "scissors"
        scissors.classList.add("clicked");
        setTimeout(function () {scissors.classList.remove("clicked")}, 100);
        play();
    })
}
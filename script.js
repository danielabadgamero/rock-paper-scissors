function computerPlay() {
    return Math.floor(Math.random() * 3)
}

function convertToItem(num) {
    switch (num) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function convertToNumber(item) {
    switch (item) {
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissors":
            return 2;
    }
}

function promptPlayer() {
    let playerMove = prompt("Rock, Paper or Scissors?").toLowerCase()
    if (playerMove !== "rock" && playerMove !== "paper" && playerMove !== "scissors") {
        alert("Invalid answer! Try again.")
    } else {
        return playerMove
    } 
}

while(1 > 0) {
    let playerMove = convertToNumber(promptPlayer())
    let computerMove = computerPlay()
    if (computerMove > playerMove) {
        if (computerMove === 2 && playerMove === 0) {
            console.log(`You won! ${convertToItem(playerMove)} beats ${convertToItem(computerMove)}.`)
        } else {
            console.log(`You lost! ${convertToItem(computerMove)} beats ${convertToItem(playerMove)}.`)
        }
    } else if (playerMove > computerMove) {
        if (computerMove === 0 && playerMove === 2) {
            console.log(`You lost! ${convertToItem(computerMove)} beats ${convertToItem(playerMove)}.`)
        } else {
            console.log(`You won! ${convertToItem(playerMove)} beats ${convertToItem(computerMove)}.`)
        }
    } else if (!playerMove)
    console.log("Ties!")
}
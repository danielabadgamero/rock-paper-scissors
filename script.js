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

function promptPlayer() {
    let playerMove = prompt("Rock, Paper or Scissors?").toLowerCase()
    if (playerMove !== "rock" && playerMove !== "paper" && playerMove !== "scissors") {
        alert("Invalid answer! Try again.")
    }
}

while(1 > 0) {
    promptPlayer()
}
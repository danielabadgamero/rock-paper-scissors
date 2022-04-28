function computerPlay() {                 // function computerPlay
    return Math.floor(Math.random() * 3)  // returns a random number rounded to floor
}                                         // basically, picks a random number to select either rock, paper or scissors

function convertToItem(num) {             // function convertToItem 
    switch (num) {                        // converts a number from 0 to 2 to rock, paper or scissors 
        case 0:                           //
            return "rock";                // just for fun
        case 1:                           //
            return "paper";               //
        case 2:                           // idk
            return "scissors";            //
    }                                     //
}

function convertToNumber(item) {          //
    switch (item) {                       //
        case "rock":                      //
            return 0;                     // same as above but from items to numbers
        case "paper":                     //
            return 1;                     //
        case "scissors":                  //
            return 2;                     //
    }                                     //
}                                         //

function promptPlayer() {
    let playerMove = prompt("Rock, Paper or Scissors?").toLowerCase()
    if (playerMove !== "rock" && playerMove !== "paper" && playerMove !== "scissors") {
        alert("Invalid answer! Try again.")
    } else {
        return playerMove
    } 
}

let roundsWon = 0  //rounds won by the player

let rounds = prompt("How many rounds do you want to play?")  //number of rounds

for (let i = 0; i < rounds; i++) {
    let playerMove = convertToNumber(promptPlayer())
    let computerMove = computerPlay()
    if (computerMove > playerMove) {
        if (computerMove === 2 && playerMove === 0) {
            console.log(`You won! ${convertToItem(playerMove)} beats ${convertToItem(computerMove)}.`)
            roundsWon += 1
        } else {
            console.log(`You lost! ${convertToItem(computerMove)} beats ${convertToItem(playerMove)}.`)
            roundsWon -= 1
        }
    } else if (playerMove > computerMove) {
        if (computerMove === 0 && playerMove === 2) {
            console.log(`You lost! ${convertToItem(computerMove)} beats ${convertToItem(playerMove)}.`)
            roundsWon -= 1
        } else {
            console.log(`You won! ${convertToItem(playerMove)} beats ${convertToItem(computerMove)}.`)
            roundsWon += 1
        }
    } else if (playerMove !== null && playerMove !== undefined) {
    console.log("Ties!")
    }
}

if (roundsWon === 0) {
    console.log("Final result: Ties!")
} else if (roundsWon > 0) {
    console.log("Final result: You won!")
} else {
    console.log("Final result: You lost!")
}
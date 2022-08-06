// this will be used in game to randomly generated computer
// pick for each round
function getComputerChoice()  {
    compChoice = Math.floor(Math.random()*3);
    if(compChoice == 0)  {
        return "rock";
    }
    else if(compChoice == 1) {
        return "paper";
    }  
    else return "scissors";
}

// return values here will be used in the game to increment 
// either the playerWin or computerWin tally
function rpsRound(playerSelection, computer)  {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock")  {
        if (computer == "rock")  {
            console.log("Tie!");
        }
        else if (computer == "paper")  {
            console.log("You lose! Paper beats Rock");
            return "lose";
        }
        else {
            console.log("You Win! Rock beats Scissors");
            return "win";
        }
    }
    if (playerSelection == "paper")  {
        if (computer == "rock")  {
            console.log("You win! Paper beats Rock");
            return "win";
        }
        else if (computer == "paper") {
            console.log("Tie!");
        }
        else {
            console.log("You lose! Scissors beats Paper");
            return "lose";
        }
    }
    if (playerSelection == "scissors")  {
        if (computer == "rock")  {
            console.log("You lose! Rock beats Scissors");
            return "lose";
        }
        else if(computer == "paper")  {
            console.log("You win! Scissors beats Paper");
            return "win";
        }
        else {
            console.log("Tie");
        }
    }
}

// full game of 5 rounds
// prompt player input
// use helper functions to determine random computer choice
// use roundOutcome and funtion for playing one rock paper scissors...
// round to tally final scores
function game() {
    let playerWins = 0;
    let computerWins = 0;
    let roundOutcome;
    let playerPick;
    let computerPick;
    for (let i = 0; i < 5; i++) {
        playerPick = prompt("Enter Rock, Paper, or Scissors: ");
        computerPick = getComputerChoice();
        roundOutcome = rpsRound(playerPick, computerPick);
        if (roundOutcome == "win") {
            playerWins++;
        }
        else if(roundOutcome == "lose")  {
            computerWins++;
        }
    }
    console.log("Computer Score is: " + computerWin);
    console.log("Player Score is: " + playerWin);
}

game();


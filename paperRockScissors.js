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

function rpsRound(player, computer)  {
    if (player == "rock")  {
        if (computer == "rock")  {
            return "Tie!";
        }
        else if (computer == "paper")  {
            return "You lose! Paper beats Rock";
        }
        else return "You Win! Rock beats Scissors";
    }
    if (player == "paper")  {
        if (computer == "rock")  {
            return "You win! Paper beats Rock";
        }
        else if (computer == "paper") {
            return "Tie!";
        }
        else return "You lose! Scissors beats Paper";
    }
    if (player == "scissors")  {
        if (computer == "rock")  {
            return "You lose! Rock beats Scissors";
        }
        else if(computer == "paper")  {
            return "You win! Scissors beats Paper";
        }
        else return "Tie!";
    }
}

computerSelection = getComputerChoice();

console.log(computerSelection);
console.log(rpsRound("scissors", computerSelection));



const rockButton = document.querySelector('.rockButton');
const paperButton = document.querySelector('.paperButton');
const scissorsButton = document.querySelector('.scissorsButton');

const playerChoice = document.querySelector('.playerChoice');
const computerChoice = document.querySelector('.computerChoice');

const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');

const gamesLeft = document.querySelector('.gamesLeft');
const dialogue = document.querySelector('.dialogue');

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
function playRound(playerSelection, computerSelection)  {
    if (playerSelection == "rock")  {
        if (computerSelection == "rock")  {
            playerChoice.innerHTML = '<img src="images/rock.png"></img>';
            computerChoice.innerHTML = '<img src="images/rock.png"></img>';
            dialogue.innerHTML = "Tie!"
        }
        else if (computerSelection == "paper")  {
            playerChoice.innerHTML = '<img src="images/noRock.png"></img>';
            computerChoice.innerHTML = '<img src="images/paper.png"></img>';
            dialogue.innerHTML = "You lose! Paper beats Rock"
            return "lose";
        }
        else {
            playerChoice.innerHTML = '<img src="images/rock.png"></img>';
            computerChoice.innerHTML = '<img src="images/noScissors.png"></img>';
            dialogue.innerHTML = "You Win! Rock beats Scissors";
            return "win";
        }
    }
    if (playerSelection == "paper")  {
        if (computerSelection == "rock")  {
            playerChoice.innerHTML = '<img src="images/paper.png"></img>';
            computerChoice.innerHTML = '<img src="images/noRock.png"></img>';
            dialogue.innerHTML = "You win! Paper beats Rock";
            return "win";
        }
        else if (computerSelection == "paper") {
            playerChoice.innerHTML = '<img src="images/paper.png"></img>';
            computerChoice.innerHTML = '<img src="images/paper.png"></img>';
            dialogue.innerHTML = "Tie!";
        }
        else {
            playerChoice.innerHTML = '<img src="images/noPaper.png"></img>';
            computerChoice.innerHTML = '<img src="images/scissors.png"></img>';
            dialogue.innerHTML = "You lose! Scissors beats Paper";
            return "lose";
        }
    }
    if (playerSelection == "scissors")  {
        if (computerSelection == "rock")  {
            playerChoice.innerHTML = '<img src="images/noScissors.png"></img>';
            computerChoice.innerHTML = '<img src="images/rock.png"></img>';
            dialogue.innerHTML = "You lose! Rock beats Scissors";
            return "lose";
        }
        else if(computerSelection == "paper")  {
            playerChoice.innerHTML = '<img src="images/scissors.png"></img>';
            computerChoice.innerHTML = '<img src="images/noPaper.png"></img>';
            dialogue.innerHTML = "You win! Scissors beats Paper";
            return "win";
        }
        else {
            console.log("Tie");
            playerChoice.innerHTML = '<img src="images/scissors.png"></img>';
            computerChoice.innerHTML = '<img src="images/scissors.png"></img>';
            dialogue.innerHTML = "Tie";
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
    let totalGames = 5;

        rockButton.addEventListener('click', () =>  {
            playerPick = "rock";
            computerPick = getComputerChoice();
            /* This section should display the icons for player and computer choice 
            playerChoice.innerHTML = '<img src="images/rock.png"></img>';
            computerChoice.innerHTML = '<img src="images/rock.png"></img>';
            */
            totalGames--;
            if (totalGames < 0) return 0;

            roundOutcome = playRound(playerPick, computerPick);
            if (roundOutcome == "win") {
                playerWins++;
            }
            else if(roundOutcome == "lose")  {
                computerWins++;
            }
            console.log("Computer Score is: " + computerWins);
            console.log("Player Score is: " + playerWins);
            playerScore.innerHTML = playerWins;
            computerScore.innerHTML = computerWins;
            gamesLeft.innerHTML = totalGames;
        })

        paperButton.addEventListener('click', () =>  {
            playerPick = "paper";
            computerPick = getComputerChoice();
            /* This section should display the icons for player and computer choice
            playerChoice.innerHTML = '<img src="images/rock.png"></img>';
            computerChoice.innerHTML = '<img src="images/rock.png"></img>';
            */
            totalGames--;
            if (totalGames < 0) return 0;

            roundOutcome = playRound(playerPick, computerPick);
            if (roundOutcome == "win") {
                playerWins++;
            }
            else if(roundOutcome == "lose")  {
                computerWins++;
            }
            console.log("Computer Score is: " + computerWins);
            console.log("Player Score is: " + playerWins);
            playerScore.innerHTML = playerWins;
            computerScore.innerHTML = computerWins;
            gamesLeft.innerHTML = totalGames;
        })

        scissorsButton.addEventListener('click', () =>  {
            playerPick = "scissors";
            computerPick = getComputerChoice();
            /* This section should display the icons for player and computer choice
            playerChoice.innerHTML = '<img src="images/rock.png"></img>';
            computerChoice.innerHTML = '<img src="images/rock.png"></img>';
            */
            totalGames--;
            if (totalGames < 0) return 0;

            roundOutcome = playRound(playerPick, computerPick);
            if (roundOutcome == "win") {
                playerWins++;
            }
            else if(roundOutcome == "lose")  {
                computerWins++;
            }

            console.log("Computer Score is: " + computerWins);
            console.log("Player Score is: " + playerWins);
            playerScore.innerHTML = playerWins;
            computerScore.innerHTML = computerWins;
            gamesLeft.innerHTML = totalGames;
        })
}
    game();
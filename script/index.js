/* Function that randomly returns 'rock','paper' or 'scissor'.
 */
function getComputerChoice() {
    let RandomNumber = parseInt(Math.random() * 100);
    if (RandomNumber < 33) {
        return ('Rock');
    }
    else if (RandomNumber > 33 && RandomNumber < 66) {
        return ('Paper');
    }
    else
        return ('Scissor');
}


/* Fuction that takes user choice and plays a round of rock-paper-scissor and declares the result
 */
function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    resultArea.textContent = 'Computer Selection : ';
    resultArea.textContent += computerChoice;
    while (humanChoice === 'rock') {
        if (computerChoice === 'Rock') {
            return ("It's A Draw!!");
        }
        else if (computerChoice === 'Paper') {
            return ("You lose.");
        } else return ("You win.");
    }
    while (humanChoice == 'paper') {
        if (computerChoice === 'Rock') {
            return ("You win.");
        }
        else if (computerChoice === 'Paper') {
            return ("It's A Draw!!");
        } else return ("You lose.");
    }
    while (humanChoice == 'scissor') {
        if (computerChoice === 'Rock') {
            return ("You lose.");
        }
        else if (computerChoice === 'Paper') {
            return ("You win.");
        } else return ("It's A Draw!!");
    }
}



const img = document.querySelectorAll('img');
const commentary = document.getElementById('commentary');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const resultArea = document.getElementById('computerSelection');
const mainContainer = document.getElementById('main-container');

img.forEach((button) => {
    button.addEventListener('click', (event) => {
        commentary.textContent = playRound(`${event.target.alt}`);
        updateScore();
    });
});

function updateScore() {
    intps = parseInt(playerScore.textContent);
    intcs = parseInt(computerScore.textContent);


    if (commentary.textContent == "You win.") {
        playerScore.textContent = intps + 1;
    } else if (commentary.textContent == "You lose.") {
        computerScore.textContent = intcs + 1;
    }

    WinnerStyleChange(intps, intcs);
}

function WinnerStyleChange(intps, intcs) {
    if (intps == 4) {
        mainContainer.style.border = '10px solid green';
        playerScore.textContent = ' 0 ';
        computerScore.textContent = ' 0 ';
        commentary.textContent = '';
        resultArea.textContent = 'Computer Selection : ';
        alert('Winner Winner Chicken Dinner!');
    }
    else if (intcs == 4) {
        mainContainer.style.border = '10px solid red';
        playerScore.textContent = ' 0 ';
        computerScore.textContent = ' 0 ';
        commentary.textContent = '';
        resultArea.textContent = 'Computer Selection : ';
        alert('No Chicken Dinner For You. Go Home.');

    }
}

/* Function that randomly returns 'rock','paper' or 'scissor'.
 */
function getComputerChoice(){
    let RandomNumber = parseInt(Math.random()*100);
    if (RandomNumber < 33){
        return('Rock');
    }
    else if (RandomNumber > 33 && RandomNumber < 66){
        return('Paper');
    }
    else 
    return('Scissor');
}



function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice();
    const resultArea = document.getElementById('computerSelection');
    resultArea.textContent = 'Computer Selection : ';
    resultArea.textContent += computerSelection;
    while (playerSelection === 'rock'){
        if(computerSelection === 'Rock'){
            return ("It's A Draw!!");
        }
        else if (computerSelection === 'Paper'){
            return ("You lose.");
        } else return ("You win.");
    }
    while (playerSelection == 'paper'){
        if(computerSelection === 'Rock'){
            return ("You win.");
        }
        else if (computerSelection === 'Paper'){
            return ("It's A Draw!!");
        } else return ("You lose.");
    }
    while (playerSelection == 'scissor'){
        if(computerSelection === 'Rock'){
            return ("You lose.");
        }
        else if (computerSelection === 'Paper'){
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
    button.addEventListener('click', (e) => {
        commentary.textContent = playRound(`${e.target.alt}`);
        updateScore();
    });
});

function updateScore(){
    intps = parseInt(playerScore.textContent);
    intcs = parseInt(computerScore.textContent);


    if(commentary.textContent == "You win."){
        playerScore.textContent = intps + 1;
    }else if(commentary.textContent == "You lose."){
        computerScore.textContent = intcs + 1;
    }

    WinnerStyleChange(intps,intcs);
}

function WinnerStyleChange(intps, intcs){
    if(intps == 4){
        mainContainer.style.border = '10px solid green';
        playerScore.textContent = ' 0 ';
        computerScore.textContent = ' 0 ';
        commentary.textContent = '';
        resultArea.textContent = 'Computer Selection : ';
        alert('Winner Winner Chicken Dinner!');
    }
    else if (intcs == 4){
        mainContainer.style.border = '10px solid red';
        playerScore.textContent = ' 0 ';
        computerScore.textContent = ' 0 ';
        commentary.textContent = '';
        resultArea.textContent = 'Computer Selection : ';
        alert('No Chicken Dinner For You. Go Home.');

    }
}


        // const rockBtn = document.getElementById('rockImg');
        // const paperBtn = document.getElementById('paperImg');
        // const scissorBtn = document.getElementById('scissorImg');
        // rockBtn.addEventListener('click', () => console.log(playRound('rock')));
        
        //takes input through prompt, not needed anymore
            // function InputFromUser(){
            //     let playerSelection = prompt('Rock, Paper Or Scissor?');
            //     return playerSelection.toLowerCase();
            // }
        
        // function game(){
            //     let userScore = 0;
            //     let computerScore = 0;
            //     for(i=0 ;i<5; i++){
                //         const instance = playRound();
                //         console.log(instance)
                //         if(instance == "You win."){userScore++;}
                //         else if(instance == "You lose."){computerScore++;}
                //     };
                //     if(userScore > computerScore){
                    //         console.log('%c Winner Winner chicken dinner', 'font-size: 20px; color: green;')
                    //     } else if(computerScore >  userScore){
//     console.log('%c No chicken dinner', 'font-size: 20px; color: red;')};
// };


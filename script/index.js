function computerPlay(){
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
    computerSelection = computerPlay();
    const resultArea = document.getElementById('computerSelection');
    resultArea.textContent = 'Computer Selection : ';
    resultArea.textContent += computerSelection;
    // playerSelection = InputFromUser();
    //this is where the action happens
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

    declareWinner(intps,intcs);
}

function declareWinner(intps, intcs){
    if(intps == 4){
        alert('Winner Winner Chicken Dinner!');
        playerScore.textContent = ' 0 ';
        computerScore.textContent = ' 0 ';
        commentary.textContent = '';
        resultArea.textContent = 'Computer Selection : ';
    }
    else if (intcs == 4){
        alert('No Chicken Dinner For You. Go Home.');
        playerScore.textContent = ' 0 ';
        computerScore.textContent = ' 0 ';
        commentary.textContent = '';
        resultArea.textContent = 'Computer Selection : ';

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


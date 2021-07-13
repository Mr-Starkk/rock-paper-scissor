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


function InputFromUser(){
    let playerSelection = prompt('Rock, Paper Or Scissor?');
    return playerSelection.toLowerCase();
}


function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    playerSelection = InputFromUser();
    //this is where the action happens
    while (playerSelection === 'rock'){
        if(computerSelection === 'Rock'){
            return ("draw");
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
            return ("draw");
        } else return ("You lose.");
    }
    while (playerSelection == 'scissor'){
        if(computerSelection === 'Rock'){
            return ("You lose.");
        }
        else if (computerSelection === 'Paper'){
            return ("You win.");
        } else return ("draw");
    }
}

// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));


function game(){
    let userScore = 0;
    let computerScore = 0;
    for(i=0 ;i<5; i++){
        const instance = playRound();
        console.log(instance)
        if(instance == "You win."){userScore++;}
        else if(instance == "You lose."){computerScore++;}
    };
    if(userScore > computerScore){
        console.log('%c Winner Winner chicken dinner', 'font-size: 20px; color: green;')
    } else if(computerScore >  userScore){
    console.log('%c No chicken dinner', 'font-size: 20px; color: red;')};
};
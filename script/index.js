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
    let userInput = prompt('Rock, Paper Or Scissor?');
    return userInput.toLowerCase();
}
function gameplay(){
    let x = computerPlay();
    userInput = InputFromUser();
    console.log(userInput);
    console.log(x);
    //this is where the action happens
    while (userInput === 'rock'){
        if(x === 'Rock'){
            return console.log("draw");
        }
        else if (x === 'Paper'){
            return console.log("You lose.");
        } else return console.log("You win.");
    }
    while (userInput == 'paper'){
        if(x === 'Rock'){
            return console.log("You win.");
        }
        else if (x === 'Paper'){
            return console.log("draw");
        } else return console.log("You lose.");
    }
    while (userInput == 'scissor'){
        if(x === 'Rock'){
            return console.log("You lose.");
        }
        else if (x === 'Paper'){
            return console.log("You win.");
        } else return console.log("draw");
    }
}
function game(){
    let score = 0;
    for(i=0; i<5; i++){
        gameplay();
    }
}
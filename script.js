let userChoise
let computerChoise
let result

const computerChoiseDisplay = document.getElementById("computer-choise")
const userChoiseDisplay = document.getElementById("user-choise")
const resultDisplay = document.getElementById("result")

const possibleChoise = document.querySelectorAll('button')


function generateComputerChoise() {
    const randomNumber = Math.floor(Math.random()*3) 
    console.log(randomNumber)

    if(randomNumber === 0){
        computerChoise = 'rock'
    }
    else if(randomNumber === 1){
        computerChoise = 'scissors'
    }
    else if(randomNumber === 2){
        computerChoise = 'paper'
    }

    computerChoiseDisplay.innerHTML = computerChoise;
}

function getResult(){
    if (computerChoise == 'scissors' & userChoise == 'rock'){
        result = 'You Win! 🏆'
    }
    else if (computerChoise == 'scissors' & userChoise == 'paper'){
        result = 'You Loose! 🚮'
    }
    else if (computerChoise == 'scissors' & userChoise == 'scissors'){
        result = 'You have a Draw! 🤝'
    }
    else if (computerChoise == 'paper' & userChoise == 'rock'){
        result = 'You Loose! 🚮'
    }
    else if (computerChoise == 'paper' & userChoise == 'scissors'){
        result = 'You Win! 🏆'
    }
    else if (computerChoise == 'paper' & userChoise == 'paper'){
        result = 'You have a Draw! 🤝'
    }
    else if (computerChoise == 'rock' & userChoise == 'rock'){
        result = 'You have a Draw! 🤝'
    }
    else if (computerChoise == 'rock' & userChoise == 'scissors'){
        result = 'You Loose! 🚮'
    }
    else if (computerChoise == 'rock' & userChoise == 'paper'){
        result = 'You Win! 🏆'
    }

    resultDisplay.innerHTML = result;
}

possibleChoise.forEach(possibleChoise => possibleChoise.addEventListener('click', (e)=>{
    userChoise = e.target.id 
    userChoiseDisplay.innerHTML = userChoise

    generateComputerChoise();
    getResult();
}))


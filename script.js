console.log("Hello world")


function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
        
    if (randomNumber === 0) {
        return "rock";
    }
    else if (randomNumber === 1) {
        return "paper";
    }
    else if (randomNumber === 2) {
        return "scissors"
    }
}

function getHumanChoice() {
    var UserChoice = prompt("Pick Rock, Paper or Scissors")
    return UserChoice
}



function playRound(humanChoice,computerChoice) {

    let humanScore = 0 
    let computerScore = 0

   humanChoice = humanChoice.toLowerCase();

   if (humanChoice === computerChoice) {
    console.log("It a tie");
   }
   else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You Win");
    humanScore++;
   }
   else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You Win");
    humanScore++;
   }
   else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You Win");
    humanScore++;
   }
   else {
    console.log("You Lose!");
    computerScore++;
   }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);



function playGame() {

    let humanScore = 0 
    let computerScore = 0

    function playRound(humanChoice,computerChoice) {
        humanChoice = humanChoice.toLowerCase();
     
        if (humanChoice === computerChoice) {
         console.log("It a tie");
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
         console.log("You Win");
         humanScore++;
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
         console.log("You Win");
         humanScore++;
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
         console.log("You Win");
         humanScore++;
        }
        else {
         console.log("You Lose!");
         computerScore++;
        }
        console.log(humanScore++)
        console,log(computerScore++)
    }
}
playGame()






// This is the test ok 
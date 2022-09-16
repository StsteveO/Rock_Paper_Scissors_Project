console.log ("Rock, Paper, or Scissors!")

// ask the user to pick rock, paper, or scissors
        // usersRawChoice
let usersRawChoice= prompt("Pick one?", "Rock, Paper, or Scissors");
//!!!!!!!!!!works, asks user for choice
// have the users choice translate to one of the three options despite how they typed it
        // usersChoiceInterpretedKey
//XXXXXXXXXX let usersChoiceInterpretedKey= usersRawChoice.toLowerCase();
//!!!!!!!!!!works, translates choice to all lower case
//!!!!!!!!!!needed to remove due to error trying .toLowerCase null, unable */
// display users choice (final)
// and create function so user does not type something random
        // usersChoiceInterpreted
function usersChoiceInterpreted() {
        if (usersRawChoice==="" || usersRawChoice=== null) {
                return ("turn skipped");
        } else if (usersRawChoice.toLowerCase()==="rock") {
                return ("rock");
        } else if (usersRawChoice.toLowerCase()==="paper") {
                return ("paper");  
        } else if (usersRawChoice.toLowerCase()==="scissors" || usersRawChoice.toLowerCase()==="scissor") {
                return ("scissors");
        } else {
                return ("not valid response");
        }
}
//!!!!!!!!!!somewhat works, to to fix null so when user cancelled it reads "turn skipped"
//!!!!!!!!!! works now due to removing usersChoiceInterpretedKey, and putting .toLowerCase into the function
// ask computer to pick rock, paper, or scissors
        // computersRawChoice
let computersRawChoice= (Math.floor(Math.random() * 3)  );
// interpret the computers decision
        // computersChoiceInterpreted
function computersChoiceInterpreted() {
        switch (computersRawChoice) {
                case 0:
                        return "rock";  
                        break;
                case 1:
                        return "paper";
                        break;
                case 2:
                        return "scissors";
                        break;
        
                default:
                        return "error";
                        break;
        }
} 
//!!!!!!!!!!works, computer made a choice, and is able to return a value

// compare the users choice with the computers choice, and give a result
// switch statements

function UserComputerComparison() {

       if (usersChoiceInterpreted()=== "rock" && computersChoiceInterpreted()=== "rock") {
        return `Both you and the computer choose ROCK. 
        It's a TIE!`;        
       } else if (usersChoiceInterpreted()=== "rock" && computersChoiceInterpreted()=== "paper") {
        return `You chosse ROCK, Computer choose PAPER.
        You LOST!`;
       }else if (usersChoiceInterpreted()=== "rock" && computersChoiceInterpreted()=== "scissors"){
        return `You chosse ROCK, Computer choose SCISSORS.
        You WON!`
       }else if (usersChoiceInterpreted()=== "paper" && computersChoiceInterpreted()=== "rock") {
        return `You chosse PAPER, Computer choose ROCK.
        You WON!`
       }else if (usersChoiceInterpreted()=== "paper" && computersChoiceInterpreted()=== "paper"){
        return `Both you and the computer choose PAPER. 
        It's a TIE!`;
       }else if (usersChoiceInterpreted()=== "paper" && computersChoiceInterpreted()=== "scissors") {
        return `You chosse PAPER, Computer choose SCISSORS.
        You LOST!`
       }else if (usersChoiceInterpreted()=== "scissors" && computersChoiceInterpreted()=== "rock"){
        return `You chosse SCISSORS, Computer choose ROCK.
        You LOST!`
       }else if (usersChoiceInterpreted()=== "scissors" && computersChoiceInterpreted()=== "paper") {
        return `You chosse SCISSORS, Computer choose PAPER.
        You WON!`
       }else if (usersChoiceInterpreted()=== "scissors" && computersChoiceInterpreted()=== "scissors"){
        return `Both you and the computer choose SCISSORS. 
        It's a TIE!`;
       }else if (usersChoiceInterpreted()=== "turn skipped") {
        return `You skipped your turn. 
        You LOST`;
       }else if (usersChoiceInterpreted()=== "not valid response"){
        return `Not a valid responce. 
        You LOST.`
       }else{
        return `Error`
       }
}


console.log (   `User: ${usersChoiceInterpreted()}` );
console.log (   `Computer: ${computersChoiceInterpreted()}` );
console.log (   UserComputerComparison() );

// give a read out to the user of what the computer choose and what the final result is
//!!!!!!!!!!works, gives a readout and is correct!

// repeat this process a total of 5 times

// declare a final winner
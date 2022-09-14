console.log ("Hello world!")

// ask the user to pick rock, paper, or scissors
        // usersRawChoice
let usersRawChoice= prompt("Pick one?", "Rock, Paper, or Scissors");
//////////////////////works, asks user for choice
// have the users choice translate to one of the three options despite how they typed it
        // usersChoiceInterpretedKey
let usersChoiceInterpretedKey= usersRawChoice.toLowerCase();
//////////////////////works, translates choice to all lower case
// display users choice (final)
// and create function so user does not type something random
        // usersChoiceInterpreted
function usersChoiceInterpreted() {
        if (usersChoiceInterpretedKey==="rock") {
                return ("rock");
        } else if (usersChoiceInterpretedKey==="paper") {
                return ("paper");  
        } else if (usersChoiceInterpretedKey==="scissors") {
                return ("scissors");
        } else if (usersChoiceInterpretedKey==="") {
                return ("turn skipped");
        } else if (usersRawChoice=== null) {
                return ("turn skipped");
        } else {
                return ("not valid response");
        }
}
//////////////////////somewhat works, to to fix null so when user cancelled it reads "turn skipped"

console.log (   usersChoiceInterpreted()   );

// ask computer to pick rock, paper, or scissors
        // computersRawChoice
// interpret the computers decision
        // computersChoiceInterpreted
// compare the users choice with the computers choice, and give a result
// switch statements

// give a read out to the user of what the computer choose and what the final result is

// repeat this process a total of 5 times

// declare a final winner
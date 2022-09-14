console.log ("Hello world!")

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
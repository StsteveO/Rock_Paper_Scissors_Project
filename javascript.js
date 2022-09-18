console.log (`Rock, Paper, or Scissors!












`)

// // ask the user to pick rock, paper, or scissors
//         // usersRawChoice
// let usersRawChoice= prompt("Pick one?", "Rock, Paper, or Scissors");
// //!!!!!!!!!!works, asks user for choice
// // have the users choice translate to one of the three options despite how they typed it
//         // usersChoiceInterpretedKey
// //XXXXXXXXXX let usersChoiceInterpretedKey= usersRawChoice.toLowerCase();
// //!!!!!!!!!!works, translates choice to all lower case
// //!!!!!!!!!!needed to remove due to error trying .toLowerCase null, unable */
// // display users choice (final)
// // and create function so user does not type something random
//         // usersChoiceInterpreted
// function usersChoiceInterpreted() {
//         if (usersRawChoice==="" || usersRawChoice=== null) {
//                 return ("turn skipped");
//         } else if (usersRawChoice.toLowerCase()==="rock") {
//                 return ("rock");
//         } else if (usersRawChoice.toLowerCase()==="paper") {
//                 return ("paper");  
//         } else if (usersRawChoice.toLowerCase()==="scissors" || usersRawChoice.toLowerCase()==="scissor") {
//                 return ("scissors");
//         } else {
//                 return ("not valid response");
//         }
// }
// //!!!!!!!!!!somewhat works, to to fix null so when user cancelled it reads "turn skipped"
// //!!!!!!!!!! works now due to removing usersChoiceInterpretedKey, and putting .toLowerCase into the function
// // ask computer to pick rock, paper, or scissors
//         // computersRawChoice
// let computersRawChoice= (Math.floor(Math.random() * 3)  );
// // interpret the computers decision
//         // computersChoiceInterpreted
// function computersChoiceInterpreted() {
//         switch (computersRawChoice) {
//                 case 0:
//                         return "rock";  
//                         break;
//                 case 1:
//                         return "paper";
//                         break;
//                 case 2:
//                         return "scissors";
//                         break;
        
//                 default:
//                         return "error";
//                         break;
//         }
// } 
// //!!!!!!!!!!works, computer made a choice, and is able to return a value

// // compare the users choice with the computers choice, and give a result
// // switch statements

// function userComputerComparison() {

//        if (usersChoiceInterpreted()=== "rock" && computersChoiceInterpreted()=== "rock") {
//         return `Both you and the computer choose ROCK. 
//         It's a TIE!`;        
//        } else if (usersChoiceInterpreted()=== "rock" && computersChoiceInterpreted()=== "paper") {
//         return `You chose ROCK, Computer chose PAPER.
//         You LOST!`;
//        }else if (usersChoiceInterpreted()=== "rock" && computersChoiceInterpreted()=== "scissors"){
//         return `You chose ROCK, Computer chose SCISSORS.
//         You WON!`
//        }else if (usersChoiceInterpreted()=== "paper" && computersChoiceInterpreted()=== "rock") {
//         return `You chose PAPER, Computer chose ROCK.
//         You WON!`
//        }else if (usersChoiceInterpreted()=== "paper" && computersChoiceInterpreted()=== "paper"){
//         return `Both you and the computer chose PAPER. 
//         It's a TIE!`;
//        }else if (usersChoiceInterpreted()=== "paper" && computersChoiceInterpreted()=== "scissors") {
//         return `You chose PAPER, Computer chose SCISSORS.
//         You LOST!`
//        }else if (usersChoiceInterpreted()=== "scissors" && computersChoiceInterpreted()=== "rock"){
//         return `You chose SCISSORS, Computer chose ROCK.
//         You LOST!`
//        }else if (usersChoiceInterpreted()=== "scissors" && computersChoiceInterpreted()=== "paper") {
//         return `You chose SCISSORS, Computer chose PAPER.
//         You WON!`
//        }else if (usersChoiceInterpreted()=== "scissors" && computersChoiceInterpreted()=== "scissors"){
//         return `Both you and the computer chose SCISSORS. 
//         It's a TIE!`;
//        }else if (usersChoiceInterpreted()=== "turn skipped") {
//         return `You skipped your turn. 
//         You LOST`;
//        }else if (usersChoiceInterpreted()=== "not valid response"){
//         return `Not a valid responce. 
//         You LOST.`
//        }else{
//         return `Error`
//        }
// }



// function oneRound() {
// console.log (   `User: ${usersChoiceInterpreted()}` );
// console.log (   `Computer: ${computersChoiceInterpreted()}` );
// console.log (   userComputerComparison() );
// }


// // give a read out to the user of what the computer choose and what the final result is
// //!!!!!!!!!!works, gives a readout and is correct!

// // repeat this process a total of 5 times

// let user= usersChoiceInterpreted();
// let computer= computersChoiceInterpreted();
// let outcome= userComputerComparison(); 

// // console.log(`Round ${i}: 
//         // User: ${user}.
//         // Computer: ${computer}.
//         // Outcome: ${outcome}`)
        




        
// // for (let i = 0; i < 6; i++) {

// //         if (i===0) {
// //                 continue
// //         }

// //       let exampleQuestion= prompt (`how are you?`); 

// //       console.log (`${i} user picks: ${exampleQuestion}`);

// // }



       
for (let i = 0; i < 6; i++) {
        //////////////////////////////////////
        if (i===0) {
                continue
        }
        //////////////////////////////////////
        let usersRawChoice= prompt("Pick one?", "Rock, Paper, or Scissors");
        //////////////////////////////////////
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
        //////////////////////////////////////
        let computersRawChoice= (Math.floor(Math.random() * 3)  );
        //////////////////////////////////////
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
        //////////////////////////////////////
        function userComputerComparison() {

                if (usersChoiceInterpreted()=== "rock" && computersChoiceInterpreted()=== "rock") {
                 return `Both you and the computer choose ROCK. 
                 It's a TIE!`;        
                } else if (usersChoiceInterpreted()=== "rock" && computersChoiceInterpreted()=== "paper") {
                 return `You chose ROCK, Computer chose PAPER.
                 You LOST!`;
                }else if (usersChoiceInterpreted()=== "rock" && computersChoiceInterpreted()=== "scissors"){
                 return `You chose ROCK, Computer chose SCISSORS.
                 You WON!`
                }else if (usersChoiceInterpreted()=== "paper" && computersChoiceInterpreted()=== "rock") {
                 return `You chose PAPER, Computer chose ROCK.
                 You WON!`
                }else if (usersChoiceInterpreted()=== "paper" && computersChoiceInterpreted()=== "paper"){
                 return `Both you and the computer chose PAPER. 
                 It's a TIE!`;
                }else if (usersChoiceInterpreted()=== "paper" && computersChoiceInterpreted()=== "scissors") {
                 return `You chose PAPER, Computer chose SCISSORS.
                 You LOST!`
                }else if (usersChoiceInterpreted()=== "scissors" && computersChoiceInterpreted()=== "rock"){
                 return `You chose SCISSORS, Computer chose ROCK.
                 You LOST!`
                }else if (usersChoiceInterpreted()=== "scissors" && computersChoiceInterpreted()=== "paper") {
                 return `You chose SCISSORS, Computer chose PAPER.
                 You WON!`
                }else if (usersChoiceInterpreted()=== "scissors" && computersChoiceInterpreted()=== "scissors"){
                 return `Both you and the computer chose SCISSORS. 
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
        //////////////////////////////////////
        console.log (`Round ${i}: ${userComputerComparison()}`);
}

//loop works but keeps giving the same answer
// declare a final winner

// console.log (`Rock, Paper, or Scissors!












// `)
//         //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^Title with space on bottom, so prompt's don't block output.       
// let wins= 0;
// let loss= 0;
// let tie= 0;


// // for (let i = 0; i < 6; i++) {
//         //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^Overall we want to loop this 5x; 5 rounds.
//         if (i===0) {
//                 continue
//         }
//         //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^We dont want a reading for "Round 0" ?. So we skip it. 
//         let usersRawChoice= prompt("Pick one?", "Rock, Paper, or Scissors");
//         //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^We get users input.
//         function usersChoiceInterpreted() {
//                 if (usersRawChoice==="" || usersRawChoice=== null) {
//                         return ("turn skipped");
//                 } else if (usersRawChoice.toLowerCase()==="rock") {
//                         return ("rock");
//                 } else if (usersRawChoice.toLowerCase()==="paper") {
//                         return ("paper");  
//                 } else if (usersRawChoice.toLowerCase()==="scissors" || usersRawChoice.toLowerCase()==="scissor") {
//                         return ("scissors");
//                 } else {
//                         return ("not valid response");
//                 }
//         }
//         //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^Convert the users input into a choice. 
//         let computersRawChoice= (Math.floor(Math.random() * 3)  );
//         //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^Get the computers input. 
//         function computersChoiceInterpreted() {
//                 switch (computersRawChoice) {
//                         case 0:
//                                 return "rock";  
//                                 break;
//                         case 1:
//                                 return "paper";
//                                 break;
//                         case 2:
//                                 return "scissors";
//                                 break;
                
//                         default:
//                                 return "error";
//                                 break;
//                 }
//         }
//         //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^Convert the users input into a choice.
//         function userComputerComparison() {



//                 if (usersChoiceInterpreted()=== "rock" && computersChoiceInterpreted()=== "rock") {
//                 tie= tie+1;
//                  return `Both you and the computer choose ROCK. 
//                  It's a TIE!`;        
//                 } else if (usersChoiceInterpreted()=== "rock" && computersChoiceInterpreted()=== "paper") {
//                 loss= loss+1;
//                  return `You chose ROCK, Computer chose PAPER.
//                  You LOST!`;
//                 }else if (usersChoiceInterpreted()=== "rock" && computersChoiceInterpreted()=== "scissors"){
//                 wins= wins+1;
//                  return `You chose ROCK, Computer chose SCISSORS.
//                  You WON!`
//                 }else if (usersChoiceInterpreted()=== "paper" && computersChoiceInterpreted()=== "rock") {
//                 wins= wins+1;
//                  return `You chose PAPER, Computer chose ROCK.
//                  You WON!`
//                 }else if (usersChoiceInterpreted()=== "paper" && computersChoiceInterpreted()=== "paper"){
//                 tie= tie+1;
//                  return `Both you and the computer chose PAPER. 
//                  It's a TIE!`;
//                 }else if (usersChoiceInterpreted()=== "paper" && computersChoiceInterpreted()=== "scissors") {
//                 loss= loss+1; 
//                  return `You chose PAPER, Computer chose SCISSORS.
//                  You LOST!`
//                 }else if (usersChoiceInterpreted()=== "scissors" && computersChoiceInterpreted()=== "rock"){
//                 loss= loss+1; 
//                  return `You chose SCISSORS, Computer chose ROCK.
//                  You LOST!`
//                 }else if (usersChoiceInterpreted()=== "scissors" && computersChoiceInterpreted()=== "paper") {
//                 wins= wins+1;
//                  return `You chose SCISSORS, Computer chose PAPER.
//                  You WON!`
//                 }else if (usersChoiceInterpreted()=== "scissors" && computersChoiceInterpreted()=== "scissors"){
//                 tie= tie+1; 
//                  return `Both you and the computer chose SCISSORS. 
//                  It's a TIE!`;
//                 }else if (usersChoiceInterpreted()=== "turn skipped") {
//                 loss= loss+1;
//                  return `You skipped your turn. 
//                  You LOST`;
//                 }else if (usersChoiceInterpreted()=== "not valid response"){
//                 loss= loss+1;
//                  return `Not a valid responce. 
//                  You LOST.`
//                 }else{
//                  return `Error`
//                 }
//          }
//         //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^Compare the users, and computers choice. 
//         console.log (`Round ${i}: ${userComputerComparison()}`);
//         //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^Give a reading.
//         if (i>4) {
//                 console.log(`
// You had ${wins} win(s), ${loss} loss(es), and ${tie} tie(s).`)
        
//                 if (tie===5) {
//                         console.log (`
                                
//                 Overall it's a Tie between you, and the computer.`);
//                 } else if(wins>loss) {
//                         console.log (`
                                
//                 Overall you are the WINNER!
//                 CONGRATULATIONS!`);
//                 } else if (wins<loss){
//                         console.log (`
                                
//                 Overall you lost. The computer is the winner.
//                 Better luck next time.`);
//                 } else if (wins===loss){
//                         console.log (`
                                
//                 Overall it's a Tie between you, and the computer.`);
//                 } else {
//                         console.log (`error`);
//                 }
//                }


//         //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^Figue out the results.
//         //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^Give a reading for the overall results.
//         //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^Declare a final winner.


       
// // }

console.log('Hello World!');

//pick= button clicked
//choice= what was chossen
//result= players choice on the screen


window.addEventListener('click', function(e){ //When clicked, run this function.

        const blockPlayerAndComputer= document.querySelector('.block-player-and-computer');


        const playersPick= document.querySelector(`.${e.target.classList[0]}`); //ex. If player picks ROCK.
        if(!playersPick) return;//Do nothing if player does not pick a button. 
        playersPick.classList.add(`button-clicked`);//Changes the button clicked.
        
        const playersResult= document.querySelector('.players-result');
        const playersChoice= document.createElement('div');
        playersChoice.textContent= `You chose ${e.target.classList[0]}!`;
        playersResult.appendChild(playersChoice); //adds players results to page

        computersRawChoice= (Math.floor(Math.random() * 3)  );

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

        const computersResult= document.querySelector('.computers-result');
        const computersChoice= document.createElement('div');
        computersChoice.textContent= `Computer chose ${computersChoiceInterpreted()}!`;
        computersResult.appendChild(computersChoice); //adds computers results to page

});


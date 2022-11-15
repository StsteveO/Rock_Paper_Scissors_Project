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
//         function testChoice {
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



//                 if (testChoice=== "rock" && computersChoiceInterpreted()=== "rock") {
//                 tie= tie+1;
//                  return `Both you and the computer choose ROCK. 
//                  It's a TIE!`;        
//                 } else if (testChoice=== "rock" && computersChoiceInterpreted()=== "paper") {
//                 loss= loss+1;
//                  return `You chose ROCK, Computer chose PAPER.
//                  You LOST!`;
//                 }else if (testChoice=== "rock" && computersChoiceInterpreted()=== "scissors"){
//                 wins= wins+1;
//                  return `You chose ROCK, Computer chose SCISSORS.
//                  You WON!`
//                 }else if (testChoice=== "paper" && computersChoiceInterpreted()=== "rock") {
//                 wins= wins+1;
//                  return `You chose PAPER, Computer chose ROCK.
//                  You WON!`
//                 }else if (testChoice=== "paper" && computersChoiceInterpreted()=== "paper"){
//                 tie= tie+1;
//                  return `Both you and the computer chose PAPER. 
//                  It's a TIE!`;
//                 }else if (testChoice=== "paper" && computersChoiceInterpreted()=== "scissors") {
//                 loss= loss+1; 
//                  return `You chose PAPER, Computer chose SCISSORS.
//                  You LOST!`
//                 }else if (testChoice=== "scissors" && computersChoiceInterpreted()=== "rock"){
//                 loss= loss+1; 
//                  return `You chose SCISSORS, Computer chose ROCK.
//                  You LOST!`
//                 }else if (testChoice=== "scissors" && computersChoiceInterpreted()=== "paper") {
//                 wins= wins+1;
//                  return `You chose SCISSORS, Computer chose PAPER.
//                  You WON!`
//                 }else if (testChoice=== "scissors" && computersChoiceInterpreted()=== "scissors"){
//                 tie= tie+1; 
//                  return `Both you and the computer chose SCISSORS. 
//                  It's a TIE!`;
//                 }else if (testChoice=== "turn skipped") {
//                 loss= loss+1;
//                  return `You skipped your turn. 
//                  You LOST`;
//                 }else if (testChoice=== "not valid response"){
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

        let wins= 0;
        let loss= 0;
        let tie= 0;
        let round= 1;

//pick= button clicked
//choice= what was chossen
//result= players choice on the screen


window.addEventListener('click', function(e){ //When clicked, run this function.

        const blockPlayerAndComputer= document.querySelector('.block-player-and-computer');

        let testChoice=(e.target.classList[0]);

        const playersPick= document.querySelector(`.${e.target.classList[0]}`); //ex. If player picks ROCK.
        if(!playersPick) return;//Do nothing if player does not pick a button. 
        if(testChoice!== 'rock' && testChoice!== 'paper' && testChoice!== 'scissors') return;

        // playersPick.classList.add(`button-clicked`);//Changes the button clicked.
        
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

        // let wins= 0;
        // let loss= 0;
        // let tie= 0;
        // let round= 1;

        function playerComputerOutcomes() {



                                if (testChoice=== "rock" && computersChoiceInterpreted()=== "rock") {
                                tie= tie+1;
                                round=round+1;
                                 return `Both you and the computer choose ROCK. 
                                 It's a TIE!`;        
                                } else if (testChoice=== "rock" && computersChoiceInterpreted()=== "paper") {
                                loss= loss+1;
                                round=round+1;
                                 return `You chose ROCK, Computer chose PAPER.
                                 You LOST!`;
                                }else if (testChoice=== "rock" && computersChoiceInterpreted()=== "scissors"){
                                wins= wins+1;
                                round=round+1;
                                 return `You chose ROCK, Computer chose SCISSORS.
                                 You WON!`
                                }else if (testChoice=== "paper" && computersChoiceInterpreted()=== "rock") {
                                wins= wins+1;
                                round=round+1;
                                 return `You chose PAPER, Computer chose ROCK.
                                 You WON!`
                                }else if (testChoice=== "paper" && computersChoiceInterpreted()=== "paper"){
                                tie= tie+1;
                                round=round+1;
                                 return `Both you and the computer chose PAPER. 
                                 It's a TIE!`;
                                }else if (testChoice=== "paper" && computersChoiceInterpreted()=== "scissors") {
                                loss= loss+1; 
                                round=round+1;
                                 return `You chose PAPER, Computer chose SCISSORS.
                                 You LOST!`
                                }else if (testChoice=== "scissors" && computersChoiceInterpreted()=== "rock"){
                                loss= loss+1; 
                                round=round+1;
                                 return `You chose SCISSORS, Computer chose ROCK.
                                 You LOST!`
                                }else if (testChoice=== "scissors" && computersChoiceInterpreted()=== "paper") {
                                wins= wins+1;
                                round=round+1;
                                 return `You chose SCISSORS, Computer chose PAPER.
                                 You WON!`
                                }else if (testChoice=== "scissors" && computersChoiceInterpreted()=== "scissors"){
                                tie= tie+1; 
                                round=round+1;
                                 return `Both you and the computer chose SCISSORS. 
                                 It's a TIE!`;
                                }else if (testChoice=== "turn skipped") {
                                loss= loss+1;
                                round=round+1;
                                 return `You skipped your turn. 
                                 You LOST`;
                                }else if (testChoice=== "not valid response"){
                                loss= loss+1;
                                round=round+1;
                                 return `Not a valid responce. 
                                 You LOST.`
                                }else{
                                 return `Error`
                                }
                         }

                         const roundResults= document.querySelector('.round-results');
                         const roundResult= document.createElement('div');
                         roundResult.textContent=(`Round ${round}) ${playerComputerOutcomes()}`);
                         roundResults.appendChild(roundResult);

                        // const winsCounter=document.querySelector('.wins');
                        // const winsCurrent= document.createElement('div')
                        // winsCurrent.textContent=(`${wins}`);
                        // winsCounter.appendChild(winsCurrent);

                        const winsCounter=document.querySelector('.wins');
                        const winsCurrent=document.querySelector('.wins-current');
                        winsCurrent.textContent=(`${wins}`);

                        const lossesCounter=document.querySelector('.losses');
                        const lossesCurrent=document.querySelector('.losses-current');
                        lossesCurrent.textContent=(`${loss}`);

                        const tiesCounter=document.querySelector('.ties');
                        const tiesCurrent=document.querySelector('.ties-current');
                        tiesCurrent.textContent=(`${tie}`);

                        const playerRock= document.querySelector('.rock');
                        const playerPaper= document.querySelector('.paper');
                        const playerScissors= document.querySelector('.scissors');


                        if(round===6){
                                playerRock.disabled=true;
                                playerPaper.disabled=true;
                                playerScissors.disabled=true;
                        }

                        function endGameResults(){        
                                if (round===6) {
                                        if (tie===5) {
                                                return (`Overall it's a Tie between you, and the computer.`);
                                        } else if(wins>loss) {
                                                return (`Overall you are the WINNER!
                                        CONGRATULATIONS!`);
                                        } else if (wins<loss){
                                                return (`Overall you lost. The computer is the winner.
                                        Better luck next time.`);
                                        } else if (wins===loss){
                                                return (`Overall it's a Tie between you, and the computer.`);
                                        } else if (undefined){
                                                return;
                                        } else {
                                                return (`error`);
                                        }
                                        }
                        }

                        if (round===6){
                        const finalResults= document.querySelector('.final-results');
                        finalResults.textContent=(`${endGameResults()}`);
                        }

});




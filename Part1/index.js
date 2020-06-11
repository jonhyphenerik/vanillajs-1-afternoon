console.log("All systems nominal.");

let gameState =  [0,0,0,0,0,0,0,0,0]; //spaces of tic tac toe board are numbered row wrap style, 0 through 8. +1 indicates X, -1 indicates O
let turnCounter = 0;
for(i=0; i<9; i++){
    document.getElementById(i).innerText = '';
}

function checkForWin(gameState){
/* checkForWin takes whoseTurn('X' or 'O')'s  gameState array
and checks if gameState[a]+gameState[b]+gameState[c]=== (3 or -3) for each [a,b,c] win state*/
    const winStates =  [[0,1,2],[3,4,5],[6,7,8], /*row*/
                        [0,3,6],[1,4,7],[2,5,8],  /*column*/
                        [0,4,8],[2,4,6]] /*diagonal*/
    for(i= 0; i<8; i++){ //increment through win states
      let a = winStates[i][0]; //tried spread operator to deconstruct, didn't work
      let b = winStates[i][1];
      let c = winStates[i][2];
      if(gameState[a]+gameState[b]+gameState[c]===3){
        alert('X wins!!!');
      }
      else if(gameState[c]+gameState[b]+gameState[a]===-3){
        alert('O wins!!!');
      }
    }
    if(turnCounter===9){
        alert('KATZ GAME! Nobody wins, everybody feels like a loser. That\'s life!')
    }
}

function play(clickedId){
    let clickedElement = document.getElementById(clickedId);
    const whoseTurn = document.getElementById('player');
    if(clickedElement.innerText!== ''){
      alert('Click on an empty square, Bozo.')
    }
    else if(whoseTurn.innerText == 'X'){
        clickedElement.innerText = 'X';
        whoseTurn.innerText = 'O';
        gameState[clickedElement.id]=1;
    }
    else {
        whoseTurn.innerText = 'X';
        clickedElement.innerText = 'O';
        gameState[clickedElement.id]=-1;
    }
    turnCounter++;
    checkForWin(gameState);
    console.log(clickedElement.id, gameState);
}

function resetGame(){
    let gameState =  [0,0,0,0,0,0,0,0,0]; 
    for(i=0; i<9; i++){
    document.getElementById(i).innerText = '';
    }
    turnCounter = 0;
}


window.addEventListener('mouseclick', play);
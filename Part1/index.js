console.log("All systems nominal.");
//spaces of tic tac toe board are numbered row wrap style, 0 through 8. +1 indicates X, -1 indicates O

let gameState ={  
    board:[0,0,0,0,0,0,0,0,0], 
    turnCounter: 0,
    whoseTurn: 'X'
}

for(i=0; i<9; i++){
    document.getElementById(i).innerText = '';
}

let {board, turnCounter, whoseTurn} = gameState;
turnCounter = board.reduce((total, curEl)=>total + Math.abs(curEl));

function checkForWin(board){
// takes a 9-item board array and checks for a win-state for X or O. 
    var winner='';
    const winStates =  [[0,1,2],[3,4,5],[6,7,8], /*row*/
                        [0,3,6],[1,4,7],[2,5,8],  /*column*/
                        [0,4,8],[2,4,6]]; /*diagonal*/
    for(i= 0; i<8; i++){ //increment through win states
      let a = winStates[i][0]; //tried spread operator to deconstruct, didn't work
      let b = winStates[i][1];
      let c = winStates[i][2];
      if(board[a]+board[b]+board[c]===3){
        let winner = 'X';
        alert('X wins!!!');
        resetGame();
      }
      else if(board[c]+board[b]+board[a]===-3){
        alert('O wins!!!');
        let winner = 'O';
        resetGame();
      }
    }
    if(turnCounter===9){
        alert('KATZ GAME! Nobody wins, everybody feels like a loser. That\'s life!');
        let winner = 'Nobody'
        resetGame();
    }
    return winner;
}

function play(clickedId){
    let clickedElement = document.getElementById(clickedId);
    whoseTurn = document.getElementById('player');
    if(clickedElement.innerText!== ''){
      alert('Click on an empty square, Bozo.')
    }
    else if(whoseTurn.innerText == 'X'){
        clickedElement.innerText = 'X';
        whoseTurn.innerText = 'O';
        board[clickedElement.id]=1;
    }
    else {
        whoseTurn.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedElement.id]=-1;
    }
    checkForWin(board);
    console.log(clickedElement.id, board);
}

function resetGame(){
    board =  [0,0,0,0,0,0,0,0,0]; 
    for(i=0; i<9; i++){
    document.getElementById(i).innerText = '';
    }
    whoseTurn.innerText = 'X';
}


window.addEventListener('mouseclick', play);
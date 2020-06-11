console.log("All systems nominal.");

let xGameState =  [0,0,0,0,0,0,0,0,0];
let oGameState =  [0,0,0,0,0,0,0,0,0];
for(i=0; i<9; i++){
    document.getElementById(i).innerText = '';
}

function checkForWin(whoseTurn, gameState){
    // there are eight winning states: 
    // three rows, three columns, two diagonal.
    // 3 rows: [(0,1,2),(3,4,5),(6,7,8)
    // columns: (0,3,6),(1,4,7),(2,5,8)
    // diagonal: (0,4,8),(6,4,2)]
    // i could create separate arrays for X and O (xGameState and oGameState)
    //and write a 1 for each played square.
    //another array can store sums of xGameState[i]+xGameState[j]+xGameState[k] 
    let winStates = [[0,1,2],[3,4,5],[6,7,8], /*row*/
                    [0,3,6],[1,4,7],[2,5,8],  /*column*/
                    [0,4,8],[6,4,2]] /*diagonal*/
    for(i=0; i<8; i++){
        winState = winStates[i];
        if(gameState[winState[0]]+ gameState[winState][1] + gameState[winState][2]===3){
            alert(whoseTurn+' wins!!!')
        }
    }
}

function play(clickedId){
    let clickedElement = document.getElementById(clickedId);
    const whoseTurn = document.getElementById('player');
    if(whoseTurn.innerText == 'X'){
        clickedElement.innerText = 'X';
        whoseTurn.innerText = 'O';
        xGameState[clickedElement]=1;
        checkForWin('X', xGameState);
    }
    else {
        whoseTurn.innerText = 'X';
        clickedElement.innerText = 'O';
        oGameState[clickedElement]=1;
        checkForWin('O',oGameState);
    }
}


window.addEventListener('mouseclick', play)
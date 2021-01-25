// Make your changes to store and update game state in this file

// Take the row and column number between 0 and 2 
// (inclusive) and update the game state.
let turnNum =0
let counter
let board 
let player = 0
function takeTurn(row, column) {
    
    getBoard()
    if(board[row][column] !== null){
        alert(`This space is already occupied`)
        return
    }
    console.log(`takeTurn was called with row: ${row}, column:${column}`);
    turnNum++
    if (turnNum % 2){
        counter = "nought"
        player = 1
    } else if ((turnNum+1) % 2) {
        counter = "cross"
        player = 2
    }
    
    console.log(`takeTurn: Turn number: ${turnNum}. This is player ${player}, using counter ${counter}`);
    
    board[row][column] = counter
    

    console.log(board);
    return board
}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    console.log("checkWinner was called");
    const winningBoard = "nought,nought,nought"
    const winningBoard1 = "cross,cross,cross"
    const horizontalBoard = []

    for(i=0;i<board.length;i++){
        for(j=0;j<board[i].length;j++){
            horizontalBoard.push(board[i][j])
        }
    }

    if ((horizontalBoard[0] !== null) && (horizontalBoard[0] === horizontalBoard[3]) && (horizontalBoard[3] === horizontalBoard [6])){
        return win()
    }
    if ((horizontalBoard[1] !== null) && (horizontalBoard[1] === horizontalBoard[4]) && (horizontalBoard[4] === horizontalBoard [7])){
        return win()
    }
    if ((horizontalBoard[2] !== null) && (horizontalBoard[2] === horizontalBoard[5]) && (horizontalBoard[5] === horizontalBoard [8])){
        return win()
    }
    if ((horizontalBoard[0] !== null) && (horizontalBoard[0] === horizontalBoard[4]) && (horizontalBoard[4] === horizontalBoard [8])){
        return win()
    }
    if ((horizontalBoard[2] !== null) && (horizontalBoard[2] === horizontalBoard[4]) && (horizontalBoard[4] === horizontalBoard [6])){
        return win()
    }


    for(i=0;i<board.length;i++){
        let currentRow = board[i].toString()
        console.log(currentRow)
        if(currentRow === winningBoard || currentRow === winningBoard1 ){
           return win()
        }
        // console.log("Not a winner")
    }
    let nullCounter = 0
    for (i=0;i<horizontalBoard.length;i++){
        if (horizontalBoard[i] !== null) {
            nullCounter++
        }
        if (nullCounter === 9) {
            return "nobody"
        }
    }
    if (board === [null, null, null], [null, null, null], [null, null, null]) {
        return "---"
    }
}
function win () {
    
    // alert('WINNER')
    console.log(player)
    if (player === 1) {
        resetGame()
        return "noughts"
    } 
    if (player === 2){
        console.log("________________________");
        resetGame()
        return "crosses"
    }
    // resetGame()
}
// Set the game state back to its original state to play another game.
function resetGame() {
    console.log("resetGame was called");
    board =  [[null, null, null], [null, null, null], [null, null, null]]
    checkWinner();
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called");
    console.log("getBoard: board = " + board)
    if (board == undefined){
        resetGame()
    }
    return board
}

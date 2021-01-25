const board = [["nought", "nought", "nought"],["nought", "null", "null"],["nought", "null", "null"]]
console.log(board.toString());
// const winningBoard = board.toString()
// // console.log(winningBoard);
// if (winningBoard === "nought,nought,nought"){
//     console.log("But why?");
// }

let horizontalBoard = []
// let horizontalBoard0 = []
// let horizontalBoard1 = []
// let horizontalBoard2 = []
for(i=0;i<board.length;i++){
    for(j=0;j<board[i].length;j++){
        horizontalBoard.push(board[i][j])
    }
}
console.log(horizontalBoard)

if ((horizontalBoard[0] !== null) && (horizontalBoard[0] === horizontalBoard[3]) && (horizontalBoard[3] === horizontalBoard [6])){
    console.log("THIS FUCKING WORKS");
}
if ((horizontalBoard[1] !== null) && (horizontalBoard[1] === horizontalBoard[4]) && (horizontalBoard[4] === horizontalBoard [7])){
    console.log("Still fucking works");
}
if ((horizontalBoard[2] !== null) && (horizontalBoard[2] === horizontalBoard[5]) && (horizontalBoard[5] === horizontalBoard [8])){
    console.log("Still fucking works");
}
if ((horizontalBoard[0] !== null) && (horizontalBoard[0] === horizontalBoard[4]) && (horizontalBoard[4] === horizontalBoard [8])){
    console.log("Still fucking works");
}
if ((horizontalBoard[2] !== null) && (horizontalBoard[2] === horizontalBoard[4]) && (horizontalBoard[4] === horizontalBoard [6])){
    console.log("Still fucking works");
}
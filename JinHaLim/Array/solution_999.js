/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    const maxboard = new Map([['x', board.length],['y',board[0].length]]);
    const count = new Map([['top',0],['bottom',0],['left',0],['right',0]]);
    const rook = new Map([['x',0],['y',0]]);
    for (let i = 0; i < board.length; i++) {
        const ele = board[i];
        if (ele.includes('R')) {
            rook.set('x',i);
            rook.set('y',ele.indexOf('R')) ;
        }
    }
    //left,right
    //top bottom
    for (let i = rook.get('y'); i >= 0; i--) {
        if (board[rook.get('x')][i] === 'B') {
            break;
        }
        else if (board[rook.get('x')][i] === 'p') {
            count.set('top',count.get('top')+1);
            break;
        }
    }
    for (let i = rook.get('y'); i < maxboard.get('y'); i++) {
        if (board[rook.get('x')][i] === 'B') {
            break;
        }
        else if (board[rook.get('x')][i] === 'p') {
            count.set('bottom',count.get('bottom')+1);
            break;
        
        }
    }
    for (let i = rook.get('x'); i >= 0; i--) {
        if (board[i][rook.get('y')] === 'B') {
            break;
        }
        else if (board[i][rook.get('y')] === 'p') {
            count.set('left',1);
            break;
        }
    }
    for (let i = rook.get('x'); i < maxboard.get('x'); i++) {
        if (board[i][rook.get('y')] === 'B') {
            break;
        }
        else if (board[i][rook.get('y')] === 'p') {
            count.set('right',1);
            break;
        }
    }
    
    return [...count.values()].reduce((acc,curr)=>{
        acc += curr
        return acc;
    },0);
};
console.log(numRookCaptures([[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]))
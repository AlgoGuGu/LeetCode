/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let sum = 0;
    for (let i = 0; i < mat.length; i++) {
        if (mat[i].includes(1)) {
            if (findZero(i,mat[i].indexOf(1),mat)) {
                sum += 1;
            }
        }
    }
    return sum;
};
const findZero = (i,j,mat) => {
    for (let row = 0; row < mat.length; row++) {
        if (mat[row][j] === 1 && row !== i) {
            return false;
        }
    }
    for (let col = 0; col < mat[0].length; col++) {
        if (mat[i][col] === 1 && col !== j) {
            return false;
        }
    }
    return true;
};
console.log(numSpecial([[1,0,0],
    [0,0,1],
    [1,0,0]]));
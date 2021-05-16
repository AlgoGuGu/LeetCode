/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    return mat.reduce((acc,curr,index) => {
        const len = curr.length;
        if(index !== len-index-1) 
        {
            acc += + curr[len-index-1];
        }
        acc += curr[index] ;
        return acc;
    },0);
};
console.log(diagonalSum([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]))
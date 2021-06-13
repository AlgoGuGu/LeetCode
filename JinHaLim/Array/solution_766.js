/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let point = [matrix.length-1, 0];
    let loopNum = 0;
    if (matrix.length > 1 ) {
        while (point[0] !== 0 || point[1] !== matrix[0].length-1) {
            const num = matrix[point[0]][point[1]];
            for (let i = 0; i < matrix.length - point[0]; i++) {
                console.log(num,point,loopNum)
                if (point[0]+i < matrix.length && point[1]+i < matrix[0].length) {
                    if (num !== matrix[point[0]+i][point[1]+i] ) {
                        return false;
                    }
                }
            }
            
            if (point[0] === 0) {
                point[1] += 1;
            }
            else{
                point[0] -= 1;
            }
        }
    }
    return true;
};
// console.log(isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]]))
// console.log(isToeplitzMatrix([[1,2],[2,2]]))
// console.log(isToeplitzMatrix([[65,98,57]]))
console.log(isToeplitzMatrix([[11,74,7,93],[40,11,74,7]]))
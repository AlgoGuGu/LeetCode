/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let x = 0;
    let y = 0;
    let arr = Array.from(Array(r), () => new Array(c).fill(null));
    if (r * c < mat.length * mat[0].length) {
        r = mat.length;
        c = mat[0].length;
    }
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if(mat.length <= r && mat[0].length <= c ){
                arr[i][j] = mat[i][j];
            }
            else if(mat.length > r && mat[0].length <= c){
                
                if (y +1 < c ) {
                    arr[x][y] = mat[i][j];
                    y++;
                }
                else if(x < r){
                    arr[x][y] = mat[i][j];
                    x++;
                    y = 0;
                }
            }
            else if(mat.length <= r && mat[0].length > c){
                
                if (y + 1 < c ) {
                    arr[x][y] = mat[i][j];
                    y++;
                }
                else if(x < r){
                    arr[x][y] = mat[i][j];
                    x++;
                    y = 0;
                }
            }
            else{
                console.log('noo')
            }
        }
    }
    return arr.reduce((acc,curr) => {
        if (curr.includes(null)) {
            curr = curr.slice(0,curr.indexOf(null));
        }
        if (curr.length > 0) acc.push(curr);
        return acc;
    },[]);
};
console.log(matrixReshape([[1,2], [3,4]],1,4));
console.log(matrixReshape([[1,2], [3,4]],2,4));
console.log(matrixReshape([[1,2], [3,4]],4,1));
console.log(matrixReshape([[1,2]],1,1));
console.log(matrixReshape([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]],42,5));
/**
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = function(mat) {
  let acc = 0;
  for (let i = 0; i < mat.length; i++) {
    const inverted = mat.length - 1 - i;
    acc += mat[i][i];
    acc += mat[i][inverted];
  }
  if (mat.length % 2 !== 0) {
    const half = Math.floor(mat.length / 2);
    acc -= mat[half][half];
  }
  return acc;
};

console.log(diagonalSum([[5]]));

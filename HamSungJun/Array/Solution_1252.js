/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
const oddCells = function(m, n, indices) {
  const rows = new Array(m).fill(0);
  const cols = new Array(n).fill(0);
  indices.forEach(([r1, c1]) => {
    rows[r1] += 1;
    cols[c1] += 1;
  });
  const matrix = createMatrix(rows, cols);
  return matrix.reduce((acc, curr) => {
    acc += curr.filter((num) => num % 2 !== 0).length;
    return acc;
  }, 0);
};

const createMatrix = (rows, cols) => {
  const matrix = Array.from(new Array(rows.length), () => new Array(cols.length));
  for (let i = 0; i < rows.length; i++) {
    matrix[i].fill(rows[i]);
  }
  for (let i = 0; i < cols.length; i++) {
    for (let j = 0; j < rows.length; j++) {
      matrix[j][i] = cols[i] + rows[j];
    }
  }
  return matrix;
};

oddCells(2, 3, [[0, 1], [1, 1]]);

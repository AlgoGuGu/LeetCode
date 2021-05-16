function transpose (matrix: number[][]): number[][] {
  const rowLen = matrix.length
  const colLen = matrix[0].length
  const answer = Array.from(new Array(colLen), () => new Array(rowLen).fill(0))
  for (let i = 0; i < colLen; i++) {
    for (let j = 0; j < rowLen; j++) {
      answer[i][j] = matrix[j][i]
    }
  }
  return answer
};
console.log(transpose([[1, 2, 3], [4, 5, 6]]))

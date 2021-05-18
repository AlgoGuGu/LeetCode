function matrixReshape (mat: number[][], r: number, c: number): number[][] {
  const rowLen = mat.length
  const colLen = mat[0].length
  if (r * c !== rowLen * colLen) {
    return mat
  }
  const newMatrix = Array.from(new Array(r), () => new Array(c))
  const pointer = [0, 0]
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      newMatrix[pointer[0]][pointer[1]] = mat[i][j]
      pointer[1] += 1
      if (pointer[1] === c) {
        pointer[0] += 1
        pointer[1] = 0
      }
    }
  }
  return newMatrix
};

console.log(matrixReshape([[1, 2], [3, 4]], 1, 4))

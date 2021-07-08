function numSpecial (mat: number[][]): number {
  let specialCount = 0
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 1 && isSpecial([i, j], mat)) {
        specialCount += 1
      }
    }
  }
  return specialCount
};

function isSpecial (pos: number[], mat: number[][]): boolean {
  const row = mat[pos[0]]
  for (let i = 0; i < row.length; i++) {
    if (row[i] === 1 && i !== pos[1]) {
      return false
    }
  }
  for (let i = 0; i < mat.length; i++) {
    if (mat[i][pos[1]] === 1 && i !== pos[0]) {
      return false
    }
  }
  return true
}

console.log(numSpecial([[1, 0, 0],
  [0, 0, 1],
  [1, 0, 0]]))

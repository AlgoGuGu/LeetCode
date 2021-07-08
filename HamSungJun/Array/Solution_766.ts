interface Bound {
    pos: number[];
    Xmin: number;
    Xmax: number;
    Ymin: number;
    Ymax: number
}

function isToeplitzMatrix (matrix: number[][]): boolean {
  const diagPos = [0, matrix.length - 1]
  while (diagPos[1] > 0) {
    if (!isSameDiag(diagPos, matrix)) {
      return false
    }
    diagPos[1] -= 1
  }
  while (diagPos[0] <= matrix[0].length - 1) {
    if (!isSameDiag(diagPos, matrix)) {
      return false
    }
    diagPos[0] += 1
  }
  return true
};

function isSameDiag (diagPos: number[], matrix:number[][]): boolean {
  const nextDiagPos = diagPos.slice()
  const firstElement = matrix[nextDiagPos[1]][nextDiagPos[0]]
  nextDiagPos[0] += 1
  nextDiagPos[1] += 1
  while (isInBound({ pos: nextDiagPos, Xmin: 0, Xmax: matrix[0].length - 1, Ymin: 0, Ymax: matrix.length - 1 })) {
    if (firstElement !== matrix[nextDiagPos[1]][nextDiagPos[0]]) return false
    nextDiagPos[0] += 1
    nextDiagPos[1] += 1
  }
  return true
}

function isInBound (bound: Bound): boolean {
  const [x, y] = bound.pos
  const { Xmin, Xmax, Ymin, Ymax } = bound
  return (Xmin <= x && x <= Xmax) && (Ymin <= y && y <= Ymax)
}

console.log(isToeplitzMatrix([[1, 2], [2, 2]]))

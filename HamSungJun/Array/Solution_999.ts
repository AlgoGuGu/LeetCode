function numRookCaptures (board: string[][]): number {
  const rookPos = findRook(board)
  return countCaptured(board, rookPos)
};

function findRook (board: string[][]): number[] {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'R') {
        return [i, j]
      }
    }
  }
  return [-1, -1]
}

function countCaptured (board: string[][], rookPos: number[]): number {
  let numCaptured = 0
  const directions: number[][] = [[-1, 0], [0, 1], [1, 0], [0, -1]]
  for (let i = 0; i < directions.length; i++) {
    const [dy, dx] = directions[i]
    const copiedPos = rookPos.slice()
    while (true) {
      copiedPos[0] += dy
      copiedPos[1] += dx
      if (!isInBound(0, board.length - 1, copiedPos) || board[copiedPos[0]][copiedPos[1]] === 'B') break
      if (board[copiedPos[0]][copiedPos[1]] === 'p') {
        numCaptured += 1
        break
      }
    }
  }
  return numCaptured
}

function isInBound (min: number, max: number, pos: number[]) :boolean {
  return pos.every(p => min <= p && p <= max)
}

function tictactoe (moves: number[][]): string {
  const GAME_STATE = {
    PENDING: 'Pending',
    DRAW: 'Draw',
    A: 'A',
    B: 'B'
  }
  if (moves.length <= 2) return GAME_STATE.PENDING
  const tictactoeMap = Array.from(new Array(3), () => new Array(3).fill(''))
  const diagonalSet = new Set(['0,0', '0,2', '1,1', '2,0', '2,2'])
  let isGameEnded = false
  let isTurnOfA = true
  for (const [row, col] of moves) {
    const nextAlpha = isTurnOfA ? 'X' : 'O'
    tictactoeMap[row][col] = nextAlpha
    isGameEnded = checkRow(tictactoeMap, nextAlpha, [row, col]) || checkCol(tictactoeMap, nextAlpha, [row, col])
    const isDiagonalMove = diagonalSet.has([row, col].join(','))
    if (isDiagonalMove) {
      isGameEnded = isGameEnded || checkDiagonal(tictactoeMap, nextAlpha, [row, col])
    }
    if (isGameEnded) {
      return isTurnOfA ? GAME_STATE.A : GAME_STATE.B
    }
    isTurnOfA = !isTurnOfA
  }
  return moves.length === 9 ? GAME_STATE.DRAW : GAME_STATE.PENDING
};

function checkRow (map: string[][], alpha: string, pos: number[]): boolean {
  for (let i = 0; i <= 2; i++) {
    if (map[i][pos[1]] !== alpha) return false
  }
  return true
}

function checkCol (map: string[][], alpha: string, pos: number[]): boolean {
  for (let i = 0; i <= 2; i++) {
    if (map[pos[0]][i] !== alpha) return false
  }
  return true
}

function checkDiagonal (map: string[][], alpha: string, pos: number[]): boolean {
  const diagonalCase = pos.join(',')
  let isWonFromLeftDiagonal = true
  let isWonFromRightDiagonal = true
  switch (diagonalCase) {
    case '0,0':
    case '2,2':
      for (let i = 0; i <= 2; i++) {
        if (map[i][i] !== alpha) return false
      }
      break
    case '1,1':
      for (let i = 0; i <= 2; i++) {
        if (isWonFromLeftDiagonal && map[i][i] !== alpha) {
          isWonFromLeftDiagonal = false
        }
        if (isWonFromRightDiagonal && map[i][2 - i] !== alpha) {
          isWonFromRightDiagonal = false
        }
      }
      return isWonFromLeftDiagonal || isWonFromRightDiagonal
    case '0,2':
    case '2,0':
      for (let i = 0; i <= 2; i++) {
        if (map[i][2 - i] !== alpha) return false
      }
      break
  }
  return true
}

console.log(tictactoe([[0, 0], [1, 1], [2, 0], [1, 0], [1, 2], [2, 1], [0, 1], [0, 2], [2, 2]]))

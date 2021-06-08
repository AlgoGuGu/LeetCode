function islandPerimeter (grid: number[][]): number {
  let sumPerimeter = 0
  const mask = [[-1, 0], [0, 1], [1, 0], [0, -1]]
  const gridRow = grid.length - 1
  const gridCol = grid[0].length - 1
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        let perimeter = 4
        for (let k = 0; k < mask.length; k++) {
          const [maskRow, maskCol] = mask[k]
          const nextRow = i + maskRow
          const nextCol = j + maskCol
          if (isInBound(gridRow, gridCol, [nextRow, nextCol])) {
            perimeter += (grid[nextRow][nextCol] === 1 ? -1 : 0)
          }
        }
        sumPerimeter += perimeter
      }
    }
  }
  return sumPerimeter
};

function isInBound (row: number, col: number, pos: number[]): boolean {
  return (pos[0] >= 0 && pos[0] <= row) && (pos[1] >= 0 && pos[1] <= col)
}

console.log(islandPerimeter([[1, 0]]))

function shiftGrid (grid: number[][], k: number): number[][] {
  if (grid.length * grid[0].length === k) return grid
  let overflowed: number[] = []
  while (k-- > 0) {
    for (let i = 0; i < grid.length; i++) {
      overflowed[i] = grid[i][grid[0].length - 1]
      for (let j = grid[0].length - 1; j >= 1; j--) {
        grid[i][j] = grid[i][j - 1]
      }
    }
    grid[0][0] = overflowed[overflowed.length - 1]
    for (let i = 1; i < grid.length; i++) {
      grid[i][0] = overflowed[i - 1]
    }
    overflowed = []
  }
  return grid
};

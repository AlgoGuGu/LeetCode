interface Coord {
    x: number,
    y: number
}
function nearestValidPoint (x: number, y: number, points: number[][]): number {
  let hasSameCoord = false
  let minManhattan = Number.MAX_SAFE_INTEGER
  let minManhattanAt = 0
  for (let i = 0; i < points.length; i++) {
    const [nextX, nextY] = points[i]
    if (nextX === x || nextY === y) {
      hasSameCoord = true
      const nextManhattan = calcManhattan({ x, y }, { x: nextX, y: nextY })
      if (minManhattan > nextManhattan) {
        minManhattan = nextManhattan
        minManhattanAt = i
      }
    }
  }
  if (!hasSameCoord) {
    return -1
  }
  return minManhattanAt
};

function calcManhattan (c1: Coord, c2: Coord): number {
  return Math.abs(c1.x - c2.x) + Math.abs(c1.y - c2.y)
}

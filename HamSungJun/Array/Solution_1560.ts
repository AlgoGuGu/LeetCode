function mostVisited (n: number, rounds: number[]): number[] {
  const visitedSector = new Array(n + 1).fill(0)
  let maxVisited = Number.MIN_SAFE_INTEGER
  let isInitial = true
  for (let i = 0; i < rounds.length - 1; i++) {
    let [start, end] = [rounds[i], rounds[i + 1]]
    if (start < end) {
      start = (isInitial ? start : start + 1)
      for (let i = start; i <= end; i++) {
        visitedSector[i] += 1
        maxVisited = Math.max(maxVisited, visitedSector[i])
      }
      isInitial = false
    } else if (start > end) {
      start = (isInitial ? start : start + 1) % (n + 1)
      while (start !== end) {
        visitedSector[start] += 1
        maxVisited = Math.max(maxVisited, visitedSector[start])
        start += 1
        start %= (n + 1)
      }
      visitedSector[end] += 1
      maxVisited = Math.max(maxVisited, visitedSector[end])
      isInitial = false
    }
  }
  console.log(maxVisited, visitedSector)
  return visitedSector.reduce((acc, curr, index) => {
    if (curr === maxVisited && index !== 0) {
      acc.push(index)
    }
    return acc
  }, [])
};

console.log(mostVisited(7, [1, 3, 5, 7]))

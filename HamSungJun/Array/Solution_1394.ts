function findLucky (arr: number[]): number {
  const countMap = new Map()
  let lastLucky = -1
  arr.forEach(n => {
    if (countMap.has(n)) {
      countMap.set(n, countMap.get(n) + 1)
    } else {
      countMap.set(n, 1)
    }
  })
  for (const [n, count] of countMap) {
    if (n === count && n > lastLucky) {
      lastLucky = n
    }
  }
  return lastLucky
};

console.log(findLucky([4, 3, 2, 2, 4, 1, 3, 4, 3]))

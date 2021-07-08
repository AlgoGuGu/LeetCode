function sumOfUnique (nums: number[]): number {
  const countMap = new Map()
  nums.forEach(n => {
    countMap.set(n, (countMap.get(n) || 0) + 1)
  })
  let acc = 0
  for (const [n, c] of countMap) {
    if (c === 1) {
      acc += n
    }
  }
  return acc
};

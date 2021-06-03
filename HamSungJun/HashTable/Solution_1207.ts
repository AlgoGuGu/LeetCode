function uniqueOccurrences (arr: number[]): boolean {
  const countMap = new Map()
  for (const num of arr) {
    if (countMap.has(num)) {
      countMap.set(num, countMap.get(num) + 1)
    } else {
      countMap.set(num, 1)
    }
  }
  let isSingleUniq = false
  for (const [k, v] of countMap) {
    if (v === 1) {
      if (isSingleUniq) {
        isSingleUniq = false
        break
      }
      isSingleUniq = true
    }
  }
  console.log(isSingleUniq)
  return isSingleUniq
};

uniqueOccurrences([26, 2, 16, 16, 5, 5, 26, 2, 5, 20, 20, 5, 2, 20, 2, 2, 20, 2, 16, 20, 16, 17, 16, 2, 16, 20, 26, 16])

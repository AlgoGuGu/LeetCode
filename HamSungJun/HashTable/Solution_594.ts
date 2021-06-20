function findLHS (nums: number[]): number {
  const countMap = new Map()
  nums.forEach(num => {
    if (countMap.has(num)) {
      countMap.set(num, countMap.get(num) + 1)
    } else {
      countMap.set(num, 1)
    }
  })
  const mapToArray = [...countMap.entries()]
  mapToArray.sort((a, b) => {
    return Number(a[0] > b[0]) - Number(a[0] < b[0])
  })
  let maxLHS = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < mapToArray.length - 1; i++) {
    if (mapToArray[i + 1][0] - mapToArray[i][0] === 1) {
      maxLHS = Math.max(maxLHS, mapToArray[i + 1][1] + mapToArray[i][1])
    }
  }
  return maxLHS
};

findLHS([1, 3, 2, 2, 5, 2, 3, 7])

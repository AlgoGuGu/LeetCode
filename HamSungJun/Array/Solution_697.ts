function findShortestSubArray (nums: number[]): number {
  const countMap = new Map()
  let maxDegree = Number.MIN_SAFE_INTEGER
  const maxDegreeNumbers = []
  nums.forEach(num => {
    if (countMap.has(num)) {
      countMap.set(num, countMap.get(num) + 1)
    } else {
      countMap.set(num, 1)
    }
    const nextCount = countMap.get(num)
    if (nextCount > maxDegree) {
      maxDegree = nextCount
    }
  })

  for (const [k, v] of countMap) {
    if (v === maxDegree) {
      maxDegreeNumbers.push(k)
    }
  }

  let minSubArrayLength = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < maxDegreeNumbers.length; i++) {
    let firstIndexOfMaxDegreeNumber = -1
    let lastIndexOfMaxDegreeNumber = -1
    const nextMaxDegreeNumber = maxDegreeNumbers[i]
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === nextMaxDegreeNumber) {
        if (firstIndexOfMaxDegreeNumber === -1) {
          firstIndexOfMaxDegreeNumber = j
        }
        lastIndexOfMaxDegreeNumber = j
      }
    }
    minSubArrayLength = Math.min(minSubArrayLength, (lastIndexOfMaxDegreeNumber - firstIndexOfMaxDegreeNumber + 1))
  }
  return minSubArrayLength
};

console.log(findShortestSubArray([2, 1, 1, 2, 1, 3, 3, 3, 1, 3, 1, 3, 2]))

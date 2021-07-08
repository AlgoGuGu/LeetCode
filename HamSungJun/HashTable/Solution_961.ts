function repeatedNTimes (nums: number[]): number {
  const uniqN = (nums.length / 2)
  const countMap = new Map()
  for (const num of nums) {
    if (countMap.has(num)) {
      countMap.set(num, countMap.get(num) + 1)
    } else {
      countMap.set(num, 1)
    }
    if (countMap.get(num) === uniqN) {
      return num
    }
  }
  return -1
};

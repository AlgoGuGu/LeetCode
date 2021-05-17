function getMinDistance (nums: number[], target: number, start: number): number {
  let minDistance = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      minDistance = Math.min(minDistance, Math.abs(i - start))
    }
  }
  return minDistance
};

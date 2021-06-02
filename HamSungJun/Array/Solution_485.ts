function findMaxConsecutiveOnes (nums: number[]): number {
  let maxConsecutiveOnes = 0
  let subAcc = 0
  for (const num of nums) {
    if (num === 1) {
      subAcc += 1
      maxConsecutiveOnes = Math.max(maxConsecutiveOnes, subAcc)
    } else {
      subAcc = 0
    }
  }
  return maxConsecutiveOnes
};

console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]))

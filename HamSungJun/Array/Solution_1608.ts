function specialArray (nums: number[]): number {
  const DP = new Array(1000 + 1).fill(0)
  nums.forEach(num => { DP[num] += 1 })
  if (DP[1000] === 1000) return 1000
  for (let i = 1000; i >= 2; i--) {
    DP[i - 1] = DP[i - 1] + DP[i]
    if (DP[i - 1] === (i - 1)) return (i - 1)
  }
  return -1
};

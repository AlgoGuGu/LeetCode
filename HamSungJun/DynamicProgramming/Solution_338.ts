function countBits (n: number): number[] {
  if (n === 0) return [0]
  const DP: number[] = new Array(n + 1)
  DP[0] = 0
  DP[1] = 1
  for (let i = 2; i <= n; i++) {
    if (Number.isInteger(Math.sqrt(i / 2))) {
      DP[i] = 1
    } else {
      DP[i] = DP[Math.floor(i / 2)] + (i % 2 === 0 ? 0 : 1)
    }
  }
  return DP
};

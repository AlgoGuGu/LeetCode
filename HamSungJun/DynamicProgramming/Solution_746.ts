function minCostClimbingStairs (cost: number[]): number {
  const DP = new Array(cost.length).fill(0)
  for (let i = 2; i < cost.length; i++) {
    DP[i] = Math.min(
      DP[i - 1] + cost[i - 1],
      DP[i - 2] + cost[i - 2]
    )
  }
  return DP[DP.length - 1]
};

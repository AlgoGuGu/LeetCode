function minCostToMoveChips (position: number[]): number {
  const count = position.reduce((acc, curr) => {
    acc[curr % 2 === 0 ? 0 : 1] += 1
    return acc
  }, [0, 0])
  return Math.min(count[0], count[1])
};

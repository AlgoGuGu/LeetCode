function sortedSquares (nums: number[]): number[] {
  const squaredNums = nums.map(n => Math.pow(n, 2))
  squaredNums.sort((a, b) => {
    return Number(a > b) - Number(a < b)
  })
  return squaredNums
};

console.log(sortedSquares(
  [-10000, -9999, -7, -5, 0, 0, 10000]))

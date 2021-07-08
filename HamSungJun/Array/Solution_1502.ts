function canMakeArithmeticProgression (arr: number[]): boolean {
  arr.sort((a, b) => {
    return Number(a > b) - Number(a < b)
  })
  const diff = arr[0] - arr[1]
  for (let i = 1; i < arr.length - 1; i += 1) {
    if (arr[i] - arr[i + 1] !== diff) {
      return false
    }
  }
  return true
};

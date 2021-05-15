function threeConsecutiveOdds (arr: number[]): boolean {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] % 2 !== 0 && [arr[i], arr[i + 1], arr[i + 2]].every(n => n % 2 !== 0)) {
      return true
    }
  }
  return false
};

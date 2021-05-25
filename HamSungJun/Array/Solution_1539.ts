function findKthPositive (arr: number[], k: number): number {
  const missingPositiveNumbers = []
  const positiveNumberSet = new Set(arr)
  let acc = 1
  while (missingPositiveNumbers.length < k) {
    if (!positiveNumberSet.has(acc)) {
      missingPositiveNumbers.push(acc)
    }
    acc += 1
  }
  return missingPositiveNumbers[k - 1]
};

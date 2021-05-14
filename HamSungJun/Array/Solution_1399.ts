function countLargestGroup (n: number): number {
  const digitSumMap = new Map()
  const sumCountMap = new Map()
  let maxSum = 0
  for (let i = 1; i <= n; i++) {
    const nextSum = calcDigitSum(i)
    if (digitSumMap.has(nextSum)) {
      digitSumMap.set(nextSum, digitSumMap.get(nextSum) + 1)
    } else {
      digitSumMap.set(nextSum, 1)
    }
    const currentSum = digitSumMap.get(nextSum)
    if (maxSum < currentSum) {
      maxSum = currentSum
    }
    if (sumCountMap.has(currentSum)) {
      sumCountMap.set(currentSum, sumCountMap.get(currentSum) + 1)
    } else {
      sumCountMap.set(currentSum, 1)
    }
  }
  return sumCountMap.get(maxSum)
};

function calcDigitSum (n: number): number {
  let sum = 0
  while (n > 0) {
    sum += n % 10
    n = Math.floor(n / 10)
  }
  return sum
}

countLargestGroup(13)

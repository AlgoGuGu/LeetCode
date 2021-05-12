function minimumAbsDifference (arr: number[]): number[][] {
  let minAbsDiff = Number.MAX_SAFE_INTEGER
  arr.sort((a, b) => {
    return Number(a > b) - Number(a < b)
  })
  const answer = []
  for (let i = 0; i < arr.length - 1; i++) {
    const nextDiff = Math.abs(arr[i] - arr[i + 1])
    if (minAbsDiff >= nextDiff) {
      minAbsDiff = nextDiff
      answer.push([arr[i], arr[i + 1]])
    }
  }
  return answer.filter(pair => Math.abs(pair[0] - pair[1]) === minAbsDiff)
};

minimumAbsDifference([4, 2, 1, 3])

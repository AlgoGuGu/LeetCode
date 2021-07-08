function sumEvenAfterQueries (nums: number[], queries: number[][]): number[] {
  let evenSum = nums.reduce((acc, curr) => {
    acc += (curr % 2 === 0 ? curr : 0)
    return acc
  }, 0)
  const answer = []
  for (let i = 0; i < queries.length; i++) {
    const [diff, index] = queries[i]
    const beforeValue = nums[index]
    const afterValue = nums[index] + diff
    const isEvenBefore = isEven(beforeValue)
    const isEvenAfter = isEven(afterValue)
    if (isEvenBefore && isEvenAfter) {
      evenSum += diff
    } else if (isEvenBefore && !isEvenAfter) {
      evenSum -= beforeValue
    } else if (!isEvenBefore && isEvenAfter) {
      evenSum += afterValue
    }
    nums[index] = afterValue
    answer.push(evenSum)
  }
  return answer
};

function isEven (value: number) {
  return value % 2 === 0
}

console.log(sumEvenAfterQueries([1, 2, 3, 4], [[1, 0], [-3, 1], [-4, 0], [2, 3]]))

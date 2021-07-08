function findErrorNums (nums: number[]): number[] {
  const countArray = new Array(nums.length + 1).fill(0)
  const answer = []
  nums.forEach(num => {
    countArray[num] += 1
    if (countArray[num] === 2) {
      answer.push(num)
    }
  })
  answer.push(countArray.findIndex((v, i) => v === 0 && i !== 0))
  return answer
};

console.log(findErrorNums([1, 1]))

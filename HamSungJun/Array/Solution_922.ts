function sortArrayByParityII (nums: number[]): number[] {
  const evens = nums.filter(n => n % 2 === 0)
  const odds = nums.filter(n => n % 2 !== 0)
  const answer = []
  for (let i = 0; i < nums.length; i += 2) {
    answer[i] = evens[i / 2]
    answer[i + 1] = odds[i / 2]
  }
  return answer
};

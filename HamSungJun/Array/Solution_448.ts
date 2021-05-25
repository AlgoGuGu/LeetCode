function findDisappearedNumbers (nums: number[]): number[] {
  const numsLen = nums.length
  const visited = new Array(numsLen + 1).fill(false)
  for (let i = 0; i < nums.length; i++) {
    visited[nums[i]] = true
  }
  return visited.reduce((acc, curr, index) => {
    if (index !== 0 && !curr) {
      acc.push(index)
    }
    return acc
  }, [])
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))

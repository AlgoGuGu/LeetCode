function subsetXORSum (nums: number[]): number {
  if (nums.length === 0) return 0
  const subSets = [0]
  for (let i = 0; i <= nums.length; i++) {
    const visited = new Array(nums.length).fill(false)
    backTrack({ endLength: i, basket: [], visited, nums, subSets })
  }
  return subSets[0]
}

function backTrack ({ endLength, basket, visited, nums, subSets }: {endLength: number, basket: Array<number>, visited: Array<boolean>, nums: Array<number>, subSets: Array<number>}) : void {
  if (basket.length === endLength) {
    console.log(basket)
    if (basket.length === 0) {
      subSets[0] += 0
    } else if (basket.length === 1) {
      subSets[0] += nums[basket[0]]
    } else {
      subSets[0] += calcXOR(basket, nums)
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (!visited[i]) {
      if (basket.length >= 1 && basket[basket.length - 1] > i) {
        continue
      }
      visited[i] = true
      basket.push(i)
      backTrack({ endLength, basket, visited, nums, subSets })
      basket.pop()
      visited[i] = false
    }
  }
}

function calcXOR (basket: Array<number>, nums: Array<number>) {
//   console.log('calc', basket, nums)
  let xorAcc = nums[basket[0]]
  for (let i = 1; i < basket.length; i++) {
    xorAcc ^= nums[basket[i]]
  }
  return xorAcc
}

console.log(subsetXORSum([1, 3]))

function frequencySort (nums: number[]): number[] {
  const countMap = new Map()
  nums.forEach(num => {
    if (countMap.has(num)) {
      countMap.set(num, countMap.get(num) + 1)
    } else {
      countMap.set(num, 1)
    }
  })
  const countArray = [...countMap].map(item => {
    return {
      number: item[0],
      frequency: item[1]
    }
  })
  countArray.sort((a, b) => {
    if (a.frequency !== b.frequency) {
      return Number(a.frequency > b.frequency) - Number(a.frequency < b.frequency)
    } else {
      return Number(a.number < b.number) - Number(a.number > b.number)
    }
  })
  return countArray.reduce((acc: number[], curr) => {
    for (let i = 0; i < curr.frequency; i++) {
      acc.push(curr.number)
    }
    return acc
  }, [])
};

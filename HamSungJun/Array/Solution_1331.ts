function arrayRankTransform (arr: number[]): number[] {
  if (arr.length === 0) {
    return []
  }
  if (arr.length === 1) {
    return [1]
  }
  const memomizedArr = arr.map((v, i) => {
    return {
      originIndex: i,
      value: v,
      rank: 1
    }
  })
  memomizedArr.sort((a, b) => {
    return Number(a.value > b.value) - Number(a.value < b.value)
  })
  const rankArray = new Array(arr.length)
  let valueHistory = memomizedArr[0].value
  rankArray[memomizedArr[0].originIndex] = memomizedArr[0].rank
  for (let i = 1; i < memomizedArr.length; i++) {
    if (valueHistory === memomizedArr[i].value) {
      memomizedArr[i].rank = memomizedArr[i - 1].rank
    } else if (valueHistory < memomizedArr[i].value) {
      memomizedArr[i].rank = memomizedArr[i - 1].rank + 1
      valueHistory = memomizedArr[i].value
    }
    rankArray[memomizedArr[i].originIndex] = memomizedArr[i].rank
  }
  return rankArray
};

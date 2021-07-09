function sortByBits (arr: number[]): number[] {
  const numBitsArr = arr.map(num => {
    return {
      num,
      numBits: num.toString(2).split('').filter(bit => bit === '1').length
    }
  })
  numBitsArr.sort((a, b) => {
    if (a.numBits !== b.numBits) {
      return Number(a.numBits > b.numBits) - Number(a.numBits < b.numBits)
    } else {
      return Number(a.num > b.num) - Number(a.num < b.num)
    }
  })
  return numBitsArr.map(item => item.num)
};

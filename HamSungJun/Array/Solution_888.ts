function fairCandySwap (aliceSizes: number[], bobSizes: number[]): number[] {
  const bobSet = new Set()
  const sumAlice = aliceSizes.reduce((acc, curr) => { acc += curr; return acc }, 0)
  const sumBob = bobSizes.reduce((acc, curr) => {
    bobSet.add(curr)
    acc += curr
    return acc
  }, 0)
  const total = sumAlice + sumBob
  const totalHalf = total / 2
  let answer:number[] = []
  for (const numAlice of aliceSizes) {
    const diff = sumAlice - numAlice
    const need = totalHalf - diff
    if (bobSet.has(need)) {
      answer = [numAlice, need]
      break
    }
  }
  return answer
};

console.log(fairCandySwap([1, 2, 5], [2, 4]))

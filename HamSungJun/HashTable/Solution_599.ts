function findRestaurant (list1: string[], list2: string[]): string[] {
  const m1 = new Map()
  const commonList: any[] = []
  let minIndexSum = Number.MAX_SAFE_INTEGER
  list1.forEach((v, i) => { m1.set(v, i) })
  list2.forEach((v, i) => {
    if (m1.has(v)) {
      const nextIndexSum = m1.get(v) + i
      minIndexSum = Math.min(minIndexSum, nextIndexSum)
      if (minIndexSum === nextIndexSum) {
        commonList.push([v, nextIndexSum])
      }
    }
  })
  return commonList.filter(([v, indexSum]) => indexSum === minIndexSum).map(([v, _]) => v)
};

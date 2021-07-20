function shortestToChar (s: string, c: string): number[] {
  const charToIndexSet: Set<number> = new Set()
  const remains = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      charToIndexSet.add(i)
      remains.push({
        v: 0,
        isC: true
      })
    } else {
      remains.push({
        v: i,
        isC: false
      })
    }
  }
  return remains.map(({ v, isC }) => {
    if (!isC) {
      return getShortest(v, charToIndexSet)
    }
    return 0
  })
};

const getShortest = (n: number, indexSet: Set<number>): number => {
  let left = n - 1
  let right = n + 1
  while (true) {
    if (indexSet.has(left)) {
      return n - left
    } else if (indexSet.has(right)) {
      return right - n
    }
    left -= 1
    right += 1
  }
}

console.log(shortestToChar('loveleetcode', 'e'))

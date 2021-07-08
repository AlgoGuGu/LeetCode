function findTheDifference (s: string, t: string): string {
  const countMap = new Map()
  let answer = ''
  for (let i = 0; i < s.length; i++) {
    const nextChar = s[i]
    if (countMap.has(nextChar)) {
      countMap.set(nextChar, countMap.get(nextChar) + 1)
    } else {
      countMap.set(nextChar, 1)
    }
  }
  for (let i = 0; i < t.length; i++) {
    const nextChar = t[i]
    if (countMap.has(nextChar) && countMap.get(nextChar) > 0) {
      countMap.set(nextChar, countMap.get(nextChar) - 1)
    } else {
      answer = nextChar
      break
    }
  }
  return answer
};

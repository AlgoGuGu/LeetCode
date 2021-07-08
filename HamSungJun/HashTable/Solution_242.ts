function isAnagram (s: string, t: string): boolean {
  const countMap = new Map()
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
    if (!countMap.has(nextChar) || countMap.get(nextChar) === 0) {
      return false
    }
    countMap.set(nextChar, countMap.get(nextChar) - 1)
  }
  return [...countMap.values()].filter(v => v >= 1).length === 0
};

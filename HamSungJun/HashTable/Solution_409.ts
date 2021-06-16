function longestPalindrome (s: string): number {
  const charCountMap = new Map()
  for (let i = 0; i < s.length; i++) {
    const nextChar = s[i]
    if (charCountMap.has(nextChar)) {
      charCountMap.set(nextChar, charCountMap.get(nextChar) + 1)
    } else {
      charCountMap.set(nextChar, 1)
    }
  }
  let sum = 0
  for (const v of charCountMap.values()) {
    if (v % 2 === 0) {
      sum += v
    } else if (v !== 1) {
      sum += (v - 1)
    }
  }
  /* 카운트가 1인 알파벳이 있었다면 그중에 하나만 채택해서 마지막 값에 더한다. */
  return sum === s.length ? sum : sum + 1
};

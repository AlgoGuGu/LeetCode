function shortestCompletingWord (licensePlate: string, words: string[]): string {
  const licenseCountMap: Map<string, number> = new Map()
  words.sort((a, b) => {
    const aLen = a.length
    const bLen = b.length
    return Number(aLen < bLen) - Number(aLen > bLen)
  })
  console.log(words)
  for (let i = 0; i < licensePlate.length; i++) {
    const nextChar = licensePlate[i]
    const nextCharCode = nextChar.charCodeAt(0)
    if ((nextCharCode >= 65 && nextCharCode <= 90) || (nextCharCode >= 97 && nextCharCode <= 122)) {
      const nextLowerChar = nextChar.toLowerCase()
      if (licenseCountMap.has(nextLowerChar)) {
        licenseCountMap.set(nextLowerChar, licenseCountMap.get(nextLowerChar) as number + 1)
      } else {
        licenseCountMap.set(nextLowerChar, 1)
      }
    }
  }
  for (let i = 0; i < words.length; i++) {
    if (isCompletingWord(licenseCountMap, words[i])) {
      return words[i]
    }
  }
};

function isCompletingWord (map: Map<string, number>, word: string): boolean {
  const wordCountMap = new Map()
  for (let i = 0; i < word.length; i++) {
    const nextChar = word[i]
    if (wordCountMap.has(nextChar)) {
      wordCountMap.set(nextChar, wordCountMap.get(nextChar) + 1)
    } else {
      wordCountMap.set(nextChar, 1)
    }
  }
  for (const [k, v] of map) {
    if (!wordCountMap.has(k)) {
      return false
    } else if (v > wordCountMap.get(k)) {
      return false
    }
  }
  return true
}

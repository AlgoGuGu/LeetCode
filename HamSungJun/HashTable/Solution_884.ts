function uncommonFromSentences (s1: string, s2: string): string[] {
  const splitS1 = s1.split(' ')
  const splitS2 = s2.split(' ')
  const countMapS1: Map<string, number> = getWordCountMap(splitS1)
  const countMapS2: Map<string, number> = getWordCountMap(splitS2)
  const uncommonWordList: string[] = []
  findUncommonWord(countMapS1, countMapS2, uncommonWordList)
  findUncommonWord(countMapS2, countMapS1, uncommonWordList)
  return uncommonWordList
};

function getWordCountMap (splitArr: string[]): Map<string, number> {
  const wordCountMap = new Map()
  splitArr.forEach(word => {
    if (wordCountMap.has(word)) {
      wordCountMap.set(word, wordCountMap.get(word) + 1)
    } else {
      wordCountMap.set(word, 1)
    }
  })
  return wordCountMap
}

function findUncommonWord (m1: Map<string, number>, m2: Map<string, number>, list: string[]): void {
  for (const [word, count] of m1) {
    if (count === 1 && !m2.has(word)) {
      list.push(word)
    }
  }
}

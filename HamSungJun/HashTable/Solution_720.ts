function longestWord (words: string[]): string {
  const wordSet = new Set()
  const lengthMap:Map<number, string[]> = new Map()
  let possibleAnswers = []
  let longestAnswers = []
  for (let i = 0; i < words.length; i++) {
    const nextWord = words[i]
    const wordLen = nextWord.length
    if (!wordSet.has(nextWord)) {
      wordSet.add(nextWord)
      if (lengthMap.has(wordLen)) {
        (lengthMap.get(wordLen) as string[]).push(nextWord)
      } else {
        lengthMap.set(wordLen, [nextWord])
      }
    }
  }
  if (!lengthMap.has(1)) {
    return ''
  }
  possibleAnswers = [...(lengthMap.get(1) as string[])]
  longestAnswers = possibleAnswers.slice()
  while (possibleAnswers.length !== 0) {
    const nextItem = possibleAnswers.shift() as string
    if (lengthMap.has(nextItem.length + 1)) {
      const reachableList = lengthMap.get(nextItem.length + 1)?.filter(str => str.startsWith(nextItem)) as string[]
      possibleAnswers.push(...reachableList)
      longestAnswers.push(...reachableList)
    }
  }
  const maxLongestWord = longestAnswers[longestAnswers.length - 1].length
  possibleAnswers = []
  for (let i = longestAnswers.length - 1; i >= 0; i--) {
    if (longestAnswers[i].length === maxLongestWord) {
      possibleAnswers.push(longestAnswers[i])
    } else {
      break
    }
  }
  possibleAnswers.sort()
  return possibleAnswers[0]
};

console.log(longestWord(['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple']))

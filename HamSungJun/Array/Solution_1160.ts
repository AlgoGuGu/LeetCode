function countCharacters (words: string[], chars: string): number {
  const charCountMap = new Map()
  const charSet = new Set(chars.split(''))
  const maybeFormed = words.filter(word => {
    for (let i = 0; i < word.length; i++) {
      if (!charSet.has(word[i])) {
        return false
      }
    }
    return true
  })
  if (maybeFormed.length === 0) return 0

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i]
    if (charCountMap.has(char)) {
      charCountMap.set(char, charCountMap.get(char) + 1)
    } else {
      charCountMap.set(char, 1)
    }
  }

  return maybeFormed.filter(word => {
    const mapCopy = new Map(charCountMap)
    for (let i = 0; i < word.length; i++) {
      mapCopy.set(word[i], mapCopy.get(word[i]) - 1)
      if (mapCopy.get(word[i]) < 0) {
        return false
      }
    }
    return true
  }).reduce((acc, curr) => {
    acc += curr.length
    return acc
  }, 0)
};

countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach')

function findWords (words: string[]): string[] {
  const rowSets: Set<string>[] = [
    new Set('qwertyuiop'.split('')),
    new Set('asdfghjkl'.split('')),
    new Set('zxcvbnm'.split(''))
  ]
  return words.filter(word => isTypedByOneRow(word.toLowerCase(), rowSets))
};

function isTypedByOneRow (word: string, rowSets: Set<string>[]): boolean {
  const firstChar = word.charAt(0)
  const firstMatchedSetIndex = rowSets.findIndex(set => set.has(firstChar))
  const matchSet = rowSets[firstMatchedSetIndex]
  for (let i = 1; i < word.length; i++) {
    if (!matchSet.has(word.charAt(i))) {
      return false
    }
  }
  return true
}

console.log(findWords(['Hello', 'Alaska', 'Dad', 'Peace']))

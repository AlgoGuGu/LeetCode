function isAlienSorted (words: string[], order: string): boolean {
  const sortMap = new Map()
  for (let i = 0; i < order.length; i++) {
    sortMap.set(order[i], i)
  }
  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i]
    const w2 = words[i + 1]
    if (isUnsorted(w1, w2, sortMap)) return false
  }
  return true
};

function isUnsorted (w1: string, w2: string, sortMap: Map<string, number>): boolean {
  const minLength = Math.min(w1.length, w2.length)
  for (let i = 0; i < minLength; i++) {
    const weightW1 = sortMap.get(w1[i]) as number
    const weightW2 = sortMap.get(w2[i]) as number
    if (weightW1 > weightW2) {
      return true
    } else if (weightW1 === weightW2) {
      if (i === minLength - 1 && w1.length > w2.length) {
        return true
      }
    } else if (weightW1 < weightW2) {
      return false
    }
  }
  return false
}

console.log(isAlienSorted(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz'))

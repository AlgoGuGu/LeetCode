function isSumEqual (firstWord: string, secondWord: string, targetWord: string): boolean {
  return wordToNum(firstWord) + wordToNum(secondWord) === wordToNum(targetWord)
};

function wordToNum (word: string): number {
  let out = ''
  for (let i = 0; i < word.length; i++) {
    const nextDigit = word[i].charCodeAt(0) - 97
    if (out.length === 0 && nextDigit === 0) {
      continue
    }
    out += nextDigit
  }
  return +out
}

function findOcurrences (text: string, first: string, second: string): string[] {
  const window = [first, second]
  const splitedText = text.split(' ')
  const matchedWords = []
  for (let i = 0; i < splitedText.length - 2; i++) {
    if (window[0] === splitedText[i] && window[1] === splitedText[i + 1]) {
      matchedWords.push(splitedText[i + 2])
    }
  }
  return matchedWords
};

console.log(findOcurrences('alice is a good girl she is a good student', 'a', 'good'))

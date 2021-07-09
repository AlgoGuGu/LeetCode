function removeDuplicates (s: string): string {
  const letterStack: string[] = []
  for (let i = 0; i < s.length; i++) {
    const letter = s[i]
    if (letter === letterStack[letterStack.length - 1]) {
      letterStack.pop()
      continue
    }
    letterStack.push(letter)
  }
  return letterStack.join('')
};

console.log(removeDuplicates('caabbdaabbz'))

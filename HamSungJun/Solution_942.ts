function diStringMatch (s: string): number[] {
  let cursor = 0
  let p1 = 0
  let p2 = s.length
  const answer = []
  while (p1 <= p2 && cursor < s.length) {
    const nextStr = s[cursor]
    switch (nextStr) {
      case 'I':
        answer.push(p1++)
        break
      case 'D':
        answer.push(p2--)
        break
    }
    cursor += 1
  }
  answer.push(p1)
  return answer
};

console.log(diStringMatch('IDID'))

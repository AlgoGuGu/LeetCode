function buildArray (target: number[], n: number): string[] {
  let cursor = 0
  const out = []
  for (let i = 1; i <= n; i++) {
    if (target[cursor] === i) {
      out.push('Push')
      cursor += 1
      if (cursor === target.length) {
        break
      }
    } else {
      out.push('Push', 'Pop')
    }
  }
  return out
};

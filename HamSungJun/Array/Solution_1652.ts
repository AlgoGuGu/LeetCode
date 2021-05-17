function decrypt (code: number[], k: number): number[] {
  const codeLen = code.length
  const empty = new Array(code.length).fill(0)
  const absK = Math.abs(k)
  if (k > 0) {
    for (let i = 0; i < codeLen; i++) {
      let p = (i + 1) % codeLen
      let sum = 0
      let acc = 0
      while (true) {
        sum += code[p]
        p += 1
        p %= codeLen
        acc += 1
        if (acc === absK) break
      }
      empty[i] = sum
    }
  } else if (k < 0) {
    for (let i = 0; i < codeLen; i++) {
      let p = i === 0 ? (codeLen - 1) : i - 1
      let sum = 0
      let acc = 0
      while (true) {
        if (p === -1) {
          p = codeLen - 1
        }
        sum += code[p]
        acc += 1
        p -= 1
        if (acc === absK) break
      }
      empty[i] = sum
    }
  }
  return empty
};

console.log(decrypt([2, 4, 9, 3], -2))

function checkZeroOnes (s: string): boolean {
  let maxContiguousOne = 0
  let maxContiguousZero = 0
  let p = 0
  while (p < s.length) {
    if (s[p] === '1') {
      let subOne = 0
      while (s[p] === '1') {
        subOne += 1
        p += 1
      }
      maxContiguousOne = Math.max(maxContiguousOne, subOne)
    } else if (s[p] === '0') {
      let subZero = 0
      while (s[p] === '0') {
        subZero += 1
        p += 1
      }
      maxContiguousZero = Math.max(maxContiguousZero, subZero)
    }
  }
  return maxContiguousOne > maxContiguousZero
};

console.log(checkZeroOnes('1101'))

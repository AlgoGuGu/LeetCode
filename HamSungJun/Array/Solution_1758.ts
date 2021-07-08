function minOperations (s: string): number {
  const strLen = s.length
  let sweetCase0: string = ''
  let sweetCase1: string = ''
  let diff0 = 0
  let diff1 = 0
  let sw: boolean = true
  for (let i = 0; i < strLen; i++) {
    if (sw) {
      sweetCase0 = '0'
      sweetCase1 = '1'
    } else {
      sweetCase0 = '1'
      sweetCase1 = '0'
    }
    if (sweetCase0[0] !== s[i]) {
      diff0 += 1
    }
    if (sweetCase1[0] !== s[i]) {
      diff1 += 1
    }
    sw = !sw
  }
  return Math.min(diff0, diff1)
};

console.log(minOperations('1111'))

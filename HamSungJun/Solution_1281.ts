function subtractProductAndSum (n: number): number {
  let pAcc = 1
  let sAcc = 0
  while (n > 0) {
    const nextDigit = (n % 10)
    pAcc *= nextDigit
    sAcc += nextDigit
    n = Math.floor(n / 10)
  }
  return pAcc - sAcc
};

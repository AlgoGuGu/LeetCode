function selfDividingNumbers (left: number, right: number): number[] {
  const answers = []
  for (let i = left; i <= right; i++) {
    if (isSelfDivide(i)) {
      answers.push(i)
    }
  }
  return answers
};

function isSelfDivide (num: number): boolean {
  let numCopy = num
  while (numCopy > 0) {
    const nextDivider = numCopy % 10
    if (num % nextDivider !== 0) {
      return false
    }
    numCopy = Math.floor(numCopy / 10)
  }
  return true
}

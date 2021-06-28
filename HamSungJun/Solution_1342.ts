function numberOfSteps (num: number): number {
  let stepCount = 0
  while (num > 0) {
    if (num % 2 === 0) {
      num /= 2
    } else {
      num -= 1
    }
    stepCount += 1
  }
  return stepCount
};

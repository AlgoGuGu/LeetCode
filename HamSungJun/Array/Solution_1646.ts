function getMaximumGenerated (n: number): number {
  if (n <= 1) return n
  let pi = 1
  const generatingArray = new Array(n + 1).fill(0)
  generatingArray[0] = 0
  generatingArray[1] = 1

  for (;;) {
    generatingArray[2 * pi] = generatingArray[pi]
    if (2 * pi === n) break
    generatingArray[2 * pi + 1] = generatingArray[pi] + generatingArray[pi + 1]
    if (2 * pi + 1 === n) break
    pi += 1
  }
  return generatingArray.reduce((acc, curr) => {
    if (curr > acc) {
      acc = curr
    }
    return acc
  }, Number.MIN_SAFE_INTEGER)
};

console.log(getMaximumGenerated(3))

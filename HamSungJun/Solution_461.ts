function hammingDistance (x: number, y: number): number {
  let numX = x
  let numY = y
  let diffCount = 0
  while (true) {
    const modX = (numX === 1 ? 1 : numX % 2)
    const modY = (numY === 1 ? 1 : numY % 2)
    if (modX !== modY) {
      diffCount += 1
    }
    numX = Math.floor(numX / 2)
    numY = Math.floor(numY / 2)
    if (numX <= 1 && numY <= 1) {
      break
    }
  }
  return (diffCount + (numX === numY ? 0 : 1))
};

console.log(hammingDistance(7, 8))

function maximumUnits (boxTypes: number[][], truckSize: number): number {
  boxTypes.sort(([b1, u1], [b2, u2]) => {
    return Number(u1 < u2) - Number(u1 > u2)
  })
  let acc = 0
  for (let i = 0; i < boxTypes.length; i++) {
    const [boxCount, unitSize] = boxTypes[i]

    if (truckSize >= boxCount) {
      acc += (boxCount * unitSize)
      truckSize -= boxCount
    } else if (truckSize > 0 && truckSize < boxCount) {
      acc += (truckSize * unitSize)
      truckSize = 0
    }

    if (truckSize === 0) {
      break
    }
  }
  return acc
};

console.log(maximumUnits([[1, 3], [5, 5], [2, 5], [4, 2], [4, 1], [3, 1], [2, 2], [1, 3], [2, 5], [3, 2]], 35))

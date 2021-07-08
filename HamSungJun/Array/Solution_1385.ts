function findTheDistanceValue (arr1: number[], arr2: number[], d: number): number {
  let count = arr1.length
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        count -= 1
        break
      }
    }
  }
  return count
};

console.log(findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6))

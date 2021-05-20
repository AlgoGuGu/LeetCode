function findSpecialInteger (arr: number[]): number {
  if (arr.length <= 3) { return arr[0] }
  const NUM_25 = Math.floor(arr.length * 25 / 100) + 1
  let count = 1
  let trackNum = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === trackNum) {
      count += 1
      if (count >= NUM_25) {
        break
      }
    } else {
      count = 1
      trackNum = arr[i]
    }
  }
  return trackNum
};
// [1,1,2,2,3,3,3,3]
console.log(findSpecialInteger([1, 1, 2, 2, 3, 3, 3, 3]))

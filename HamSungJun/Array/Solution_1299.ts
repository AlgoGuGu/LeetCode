function replaceElements (arr: number[]): number[] {
  let lastMaxRight = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= lastMaxRight) {
      lastMaxRight = Number.MIN_SAFE_INTEGER
      for (let j = i + 1; j < arr.length; j++) {
        lastMaxRight = Math.max(lastMaxRight, arr[j])
      }
    }
    arr[i] = lastMaxRight
  }
  arr[arr.length - 1] = -1
  return arr
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]))

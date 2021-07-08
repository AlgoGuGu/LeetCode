function relativeSortArray (arr1: number[], arr2: number[]): number[] {
  const countArray = new Array(1000 + 1).fill(0)
  arr1.forEach(n => { countArray[n] += 1 })
  const answer = new Array(arr1.length)
  let p1 = 0
  for (let i = 0; i < arr2.length; i++) {
    if (countArray[arr2[i]] > 0) {
      while (countArray[arr2[i]] > 0) {
        answer[p1] = arr2[i]
        countArray[arr2[i]] -= 1
        p1 += 1
      }
    }
  }
  for (let i = 0; i < countArray.length; i++) {
    if (countArray[i] > 0) {
      while (countArray[i] > 0) {
        answer[p1] = i
        countArray[i] -= 1
        p1 += 1
      }
    }
  }
  return answer
};

relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])

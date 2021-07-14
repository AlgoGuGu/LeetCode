function minDeletionSize (strs: string[]): number {
  if (strs.length <= 1) return 0
  let delCount = 0
  for (let i = 0; i < strs[0].length; i++) {
    delCount += (isSorted(strs, i) ? 0 : 1)
  }
  return delCount
};

//* 오름차순인지 내림차순인지까지도 한번 확인하고 가야하는 함수를 짜야되는줄 알았다 -__- 사전순은 기본 오름차순이구나
const isSorted = (arr: string[], col: number): boolean => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][col] > arr[i + 1][col]) {
      return false
    }
  }
  return true
}

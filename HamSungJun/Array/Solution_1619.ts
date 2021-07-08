const sorted:number[] = []
function trimMean (arr: number[]): number {
  /*
   * 입력 데이터의 갯수의 최대가 5000개일 때
   * 자바스크립트 내장 정렬 알고리즘이 병합 정렬보다 빨랐다.
   */
  mergeSort(arr, 0, arr.length - 1)
  // arr.sort((a, b) => {
  //     return Number(a > b) - Number(a < b)
  // })
  const percentFive = Math.floor(arr.length / 20)
  let sum = 0
  for (let i = 0 + percentFive; i < arr.length - percentFive; i++) {
    sum += arr[i]
  }
  return (sum / (arr.length - (2 * percentFive)))
};

function mergeSort (arr: number[], left: number, right: number): void {
  if (left < right) {
    const mid = Math.floor((left + right) / 2)
    mergeSort(arr, left, mid)
    mergeSort(arr, mid + 1, right)
    merge(arr, left, mid, right)
  }
}

function merge (arr: number[], left: number, mid: number, right: number) {
  let i = left
  let j = mid + 1
  let p = left

  while (i <= mid && j <= right) {
    if (arr[i] >= arr[j]) {
      sorted[p] = arr[j]
      j++
    } else {
      sorted[p] = arr[i]
      i++
    }
    p++
  }

  if (i > mid) {
    for (let k = j; k <= right; k++) {
      sorted[p++] = arr[k]
    }
  } else {
    for (let k = i; k <= mid; k++) {
      sorted[p++] = arr[k]
    }
  }

  for (let k = left; k <= right; k++) {
    arr[k] = sorted[k]
  }
}

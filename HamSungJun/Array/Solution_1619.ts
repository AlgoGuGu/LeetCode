function trimMean (arr: number[]): number {

};

function mergeSort (arr: number[], left: number, right: number): void {
  if (left < right) {
    const mid = (left + right) / 2
    mergeSort(arr, left, mid)
    mergeSort(arr, mid + 1, right)
    merge(arr, left, mid, right)
  }
}

function merge (arr: number[], left: number, mid: number, right: number) {
  const i = left
  const j = mid + 1
  const k = left

  while (i <= mid && j <= right) {

  }
}

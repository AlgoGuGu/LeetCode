function peakIndexInMountainArray (arr: number[]): number {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
      return i
    }
  }
  return -1
};

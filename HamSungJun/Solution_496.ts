function nextGreaterElement (nums1: number[], nums2: number[]): number[] {
  const numToIndexMap: Map<number, number> = new Map()
  for (let i = 0; i < nums2.length; i++) {
    numToIndexMap.set(nums2[i], i)
  }
  return nums1.map(n => {
    for (let i = numToIndexMap.get(n) as number + 1; i < nums2.length; i++) {
      if (nums2[i] > n) {
        return nums2[i]
      }
    }
    return -1
  })
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1: number[], nums2: number[]): number[] {
  const countMap = new Map()
  const result: number[] = []
  nums1.forEach(n1 => {
    if (countMap.has(n1)) {
      countMap.set(n1, countMap.get(n1) + 1)
    } else {
      countMap.set(n1, 1)
    }
  })
  nums2.forEach(n2 => {
    if (countMap.has(n2) && countMap.get(n2) > 0) {
      result.push(n2)
      countMap.set(n2, countMap.get(n2) - 1)
    }
  })
  return result
}

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))

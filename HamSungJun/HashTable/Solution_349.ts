function intersection (nums1: number[], nums2: number[]): number[] {
  const uniqIntersectionMap = new Map()
  for (const n1 of nums1) {
    if (!uniqIntersectionMap.has(n1)) {
      uniqIntersectionMap.set(n1, false)
    }
  }
  for (const n2 of nums2) {
    if (uniqIntersectionMap.has(n2)) {
      uniqIntersectionMap.set(n2, true)
    }
  }
  return [...uniqIntersectionMap.entries()].filter(([k, v]) => v).map(([k, v]) => k)
};

console.log(intersection([1, 2, 2, 1], [2, 2]))

function tribonacci (n: number): number {
  if (n <= 1) return n
  if (n === 2) return 1
  let t0 = 0
  let t1 = 1
  let t2 = 1
  let acc = 0
  for (let i = 3; i <= n; i++) {
    acc = t2 + t1 + t0
    t0 = t1
    t1 = t2
    t2 = acc
  }
  return acc
};

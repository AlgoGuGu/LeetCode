function fib (n: number): number {
  if (n <= 1) return n
  let fbefore = 0
  let fcurrent = 1
  let fnext = 0
  for (let i = 2; i <= n; i++) {
    fnext = fcurrent + fbefore
    fbefore = fcurrent
    fcurrent = fnext
  }
  return fnext
};

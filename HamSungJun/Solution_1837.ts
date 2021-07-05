function sumBase (n: number, k: number): number {
  return n.toString(k).split('').reduce((acc, curr) => (acc += +curr), 0)
};

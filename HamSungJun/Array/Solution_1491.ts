function average (salary: number[]): number {
  const [total, maxSalary, minSalary] = salary.reduce((acc, curr) => {
    acc[0] += curr
    acc[1] = Math.max(acc[1], curr)
    acc[2] = Math.min(acc[2], curr)
    return acc
  }, [0, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER])
  return +((total - (maxSalary + minSalary)) / (salary.length - 2)).toFixed(5)
};

console.log(average([150, 305, 555, 454]))

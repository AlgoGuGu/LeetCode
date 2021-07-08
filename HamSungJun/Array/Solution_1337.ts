function kWeakestRows (mat: number[][], k: number): number[] {
  const mapped = mat.map((row, i) => {
    return {
      index: i,
      strength: row.filter(n => n === 1).length
    }
  })
  mapped.sort((a, b) => {
    if (a.strength !== b.strength) {
      const strA = a.strength
      const strB = b.strength
      return Number(strA > strB) - Number(strA < strB)
    } else {
      return Number(a.index > b.index) - Number(a.index < b.index)
    }
  })
  return mapped.slice(0, k).map(item => item.index)
};

console.log(kWeakestRows([[1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1]], 3))

function luckyNumbers (matrix: number[][]): number[] {
  const minRows: number[] = matrix.reduce((acc, curr) => {
    acc.push(getMaxMin(curr, 'min'))
    return acc
  }, [])
  const maxCols = []
  for (let i = 0; i < matrix[0].length; i++) {
    let maxCol = Number.MIN_SAFE_INTEGER
    for (let j = 0; j < matrix.length; j++) {
      maxCol = Math.max(maxCol, matrix[j][i])
    }
    maxCols.push(maxCol)
  }
  const s = new Set()
  const answer: number[] = []
  minRows.concat(maxCols).forEach(n => {
    if (s.has(n)) {
      answer.push(n)
    } else {
      s.add(n)
    }
  })
  return answer
};

const getMaxMin = (arr: number[], which: string): number => {
  return arr.reduce((acc, curr) => {
    acc = which === 'max' ? Math.max(acc, curr) : Math.min(acc, curr)
    return acc
  }, which === 'max' ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER)
}

function canFormArray (arr: number[], pieces: number[][]): boolean {
  while (true) {
    let arrPointer = 0
    let isMatched = false
    for (let i = 0; i < pieces.length; i++) {
      const nextPiece = pieces[i]
      if (arr[arrPointer] === nextPiece[0]) {
        isMatched = true
        arrPointer += 1
        for (let j = 1; j < nextPiece.length; j++) {
          if (nextPiece[j] !== arr[arrPointer]) {
            return false
          } else {
            arrPointer += 1
          }
        }
        arr = arr.slice(arrPointer)
        if (arr.length === 0) { return true }
      }
    }
    if (!isMatched) { return false }
  }
};

console.log(canFormArray([91, 4, 64, 78], [[78], [4, 64], [91]]))

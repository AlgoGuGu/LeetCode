function countNegatives(grid: number[][]): number {
    const nRow = grid.length
    const nCol = grid[0].length
    let negativeAcc = 0
    for(let i = 0; i < nRow; i++){
        const negativeAt = grid[i].findIndex(num => num < 0)
        negativeAcc += (nCol - (negativeAt === -1 ? nCol : negativeAt))
    }
    return negativeAcc
};

console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))
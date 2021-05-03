function sortArrayByParity(A: number[]): number[] {
    A.sort((a,b) => {
        const isEvenA = (a % 2 === 0)
        const isEvenB = (b % 2 === 0)
        if(isEvenA && isEvenB) {
            return 0
        }
        else if (isEvenA && !isEvenB) {
            return -1
        }
        else if (!isEvenA && isEvenB) {
            return 1
        }
        else {
            return 0
        }
    })
    return A
};

console.log(sortArrayByParity([3, 1, 2, 4]))
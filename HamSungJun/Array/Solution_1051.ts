function heightChecker(heights: number[]): number {
    /*
     * 오름차순 정렬된 배열 expected.
     * 원본 배열 heights.
     * 두 배열의 같은 인덱스에 대해 값의 일치를 비교하면서
     * 일치하지 않는 값의 갯수를 반환.
     */
    const expected = heights.slice().sort((a,b) => {
        return Number(a > b) - Number(a < b)
    })
    let notEqualAcc = 0
    heights.forEach((h, i) => {
        if(h !== expected[i]){
            notEqualAcc += 1
        }
    })
    return notEqualAcc
};

console.log(heightChecker([10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7]
    ))
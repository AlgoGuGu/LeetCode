function countBalls(lowLimit: number, highLimit: number): number {
    let maxCount: number = Number.MIN_SAFE_INTEGER
    const countArray: number[] = new Array(highLimit+1).fill(0)
    for(let i = lowLimit; i <= highLimit; i++){
        const nextDigitSum = digitSum(i)
        countArray[nextDigitSum] += 1
        if(countArray[nextDigitSum] > maxCount){
            maxCount = countArray[nextDigitSum]
        }
    }
    return maxCount
};

function digitSum(num: number){
    let sum = 0
    while(num > 0){
        sum += (num % 10)
        num = Math.floor(num / 10)
    }
    return sum
}


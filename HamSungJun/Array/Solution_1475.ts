function finalPrices(prices: number[]): number[] {
    for(let i = 0; i < prices.length - 1; i++){
        for(let j = i + 1; j < prices.length; j++){
            if(prices[i] >= prices[j]){
                prices[i] -= prices[j]
                break;
            }
        }
    }
    return prices
};

console.log(finalPrices([9, 9, 10]))
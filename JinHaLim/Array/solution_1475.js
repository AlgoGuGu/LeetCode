/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    return prices.reduce((acc,curr,index) => {
        const arr = prices.filter((v,i)=>{
            if(i > index && v <= curr) return v;
         });
        if(arr[0] === undefined) acc.push(curr);
        else acc.push(curr-arr[0]) ;
        return acc;
    },[]);
};
console.log(finalPrices([8,4,6,2,3]))
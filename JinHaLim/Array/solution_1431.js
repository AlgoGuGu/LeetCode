/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let greatest = Math.max.apply(null, candies);
    return candies.reduce((acc,curr,index) => {
        if(curr === greatest){
            acc[index] = true
        }
        else if(curr + extraCandies >= greatest){
            acc[index] = true
        }
        else{
            acc[index] = false
        }
        return acc;
    },[]);
};
console.log(kidsWithCandies([2,3,5,1,3],3))
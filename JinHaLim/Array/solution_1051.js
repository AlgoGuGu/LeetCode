/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let arr = heights.slice().sort((a,b)=>a-b);
    console.log(arr, heights, arr.length)
    return arr.reduce((acc,curr,index) => {     
        if(curr !== heights[index]) acc += 1;
        return acc;
    },0);
};
console.log(heightChecker([10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7]))
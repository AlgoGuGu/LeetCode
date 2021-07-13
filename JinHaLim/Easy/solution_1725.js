/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    let maxLen = 0;
    return rectangles.reduce((acc,curr) => {
        let ele = curr[0] < curr[1] ? curr[0]: curr[1];
        if (maxLen < ele ) {
            maxLen = ele;
        }
        acc.push(ele);
        return acc;
    },[]).filter((v) => {
        return v === maxLen;
    }).length;
};
console.log(countGoodRectangles([[5,8],[3,9],[5,12],[16,5]]))
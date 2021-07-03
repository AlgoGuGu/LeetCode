/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let count = 0;
    let curr = '';
    let max = 0;
    s.split('').forEach((ele,index) => {
        if(curr !== ele){
            curr = ele;
            count = 1;
        }
        else {
            ++count;
        }
        max = Math.max(max,count);        
    });
    return max;
};
console.log(maxPower("leetcode"))
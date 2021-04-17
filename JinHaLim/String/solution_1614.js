/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let depthNum = 0;
    let maxNum = 0;
    if(!s.includes('('))  return 0;
    return s.split("").reduce((acc,curr) => {
        if(acc === '(' || curr === '('){
            if(acc === '(' && curr === '(') ++depthNum;
            ++depthNum;
        } 
        else if(acc  === ')' || curr === ')'){
            --depthNum;
        }
        if( maxNum < depthNum ) maxNum = depthNum;
        // console.log(acc,curr,maxNum)
        return maxNum;
    });
};
// console.log(maxDepth("(1+(2*3)+((8)/4))+1"))
console.log(maxDepth("((3-5-9)/6)*8"))
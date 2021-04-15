/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let leftCount = 0;
    let rightCount = 0;
    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        
        if(s[i] === 'L'){
            leftCount++;
        }
        else if(s[i] === 'R'){
            rightCount++;
        }
        if( leftCount !== 0 && 
            rightCount !== 0 && 
            leftCount === rightCount)
        {
            sum++;
            leftCount = 0;
            rightCount = 0;
        }
    }
    return sum;
};
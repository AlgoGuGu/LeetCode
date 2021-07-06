/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let sum = 0;
    while (n > 1) {
        if (n%2 === 0) {
            n = n/2;
            sum += n;
        }else{
            n = (n-1)/2 ;
            sum += n;
            n += 1;
        }
    }
    return sum;
};
console.log(numberOfMatches(5))
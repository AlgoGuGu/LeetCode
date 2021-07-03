/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    let string = String(n).split('');
    if(string.length <= 3) return string.join('');
    let len = string.length;
    for (let i = 0; i < Math.floor(len/3); i++) {
        // console.log(i, Math.floor(len/3),len-3*i-3)
        if(len-3*i-3 !== 0){
        string.splice(len-3*i-3,0,'.');
        }
    }
    // console.log(string)
    return string.join('');

};
console.log(thousandSeparator(145665456675678))
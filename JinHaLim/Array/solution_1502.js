/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b)=>a-b);
    let old = arr[0];
    let bt = Math.abs(old-arr[1]);;
    for (let i = 1; i < arr.length; i++) {
        let bt2 = Math.abs(old-arr[i]);
        if (bt !== bt2) {
            return false
        }
        old = arr[i];
    }
    return true;
};
console.log(canMakeArithmeticProgression([3,5,1]))
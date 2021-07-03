/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    let result = [];
    if (k === 0) {
        return new Array(code.length).fill(0);
    }
    else if(k > 0){
        code.forEach((_,idx) => {
            let sum = 0;
            for (let i = 1; i <= k; i++) {
                sum += code[(idx+i)%code.length];
            }
            result.push(sum);
        });
        return result;
    }
    else if(k < 0 ){
        code.forEach((_,idx) => {
            let sum = 0;
            for (let i = 1; i <= Math.abs(k); i++) {
                let index = (idx-i);
                if (index < 0) {
                    index += Math.ceil(Math.abs(idx - i)/code.length)*code.length;
                }
                sum += code[index];
            }
            result.push(sum);
        });
        return result;
    }
};
console.log(decrypt([5,7,1,4],3))
console.log(decrypt([2,4,9,3],-2))
console.log(decrypt([10,5,7,7,3,2,10,3,6,9,1,6],-4))
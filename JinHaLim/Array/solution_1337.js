/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let result = [];
    let arr = mat.reduce((acc,curr) => {
        let value = curr.reduce((acc2,curr2) => {
            return acc2 + curr2;
        },0);
        acc.push(value);
        return acc;
    },[]);
    const sortSet = new Set(arr.slice().sort((a,b) => a-b));
    const sortArr = [...sortSet];
    sortArr.forEach(ele => {
        arr.filter((v,index) => {
            if(v === ele) {
                result.push(index);   
            }
        });
    });
    return result.slice(0,k);
};
console.log(kWeakestRows([[1,0],[1,0],[1,0],[1,1]],4))
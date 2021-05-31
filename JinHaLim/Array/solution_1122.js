/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let arrMap = arr1.reduce((acc,curr) => {
        if(acc.has(curr)) acc.set(curr,acc.get(curr)+1);
        else acc.set(curr,1);
        return acc;
    },new Map());
    let result = [];
    for (let i = 0; i < arr2.length; i++) {
        const ele = arr2[i];
        while(arrMap.get(ele) > 0) {
            result.push(ele);
            arrMap.set(ele,arrMap.get(ele) - 1);
        }
        arr1 = arr1.filter(v => v !== ele);
        arrMap.delete(ele);
    }
    arr1.sort((a,b) => a-b);
    return result.concat(arr1);
};
console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]))


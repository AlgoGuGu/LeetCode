/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let arrMap = new Map();
    for (let i = 0; i < arr.length; i++) {
       if (arrMap.has(arr[i])) {
           arrMap.set(arr[i],arrMap.get(arr[i])+1);
       }
       else{
        arrMap.set(arr[i],1);
       }
       if (arrMap.get(arr[i]) > arr.length*0.25) {
           return arr[i];
       }
    }
    return null;
};
console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10]))
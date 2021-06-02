/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    let diff = 0;
    let result = [];
    arr.sort((a,b)=> a-b);
    diff = Math.abs(arr[1] - arr[0]);
    for (let i = 0; i < arr.length-1; i++) {
        if(diff > Math.abs(arr[i+1] - arr[i])){
            diff = Math.abs(arr[i+1] - arr[i]);
            i = 0;
            result = [];
        }
        else if(diff === Math.abs(arr[i+1] - arr[i])){
            result.push([arr[i],arr[i+1]]);
        }
        
    }
    return result;
};
console.log(minimumAbsDifference([4,2,1,3]));
console.log(minimumAbsDifference([3,8,-10,23,19,-4,-14,27]));
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    let evenArr = [];
    let sum = nums.reduce((acc,curr)=>{
        if (curr%2 === 0) {
            acc += curr;
        }
        return acc;
    },0);
    queries.forEach(v => {
        if (v[0]%2 === 0) {
            if (nums[v[1]] % 2 === 0) {
                sum += v[0];
            }
            nums[v[1]] += v[0];
        }
        else{
            if (nums[v[1]] % 2 === 0) {
                sum -= nums[v[1]];
                nums[v[1]] += v[0];
                
            }
            else{
                nums[v[1]] += v[0];
                sum +=  nums[v[1]];
            }
        }
        evenArr.push(sum);
    });
    return evenArr;
};
console.log(sumEvenAfterQueries([1,2,3,4],[[1,0],[-3,1],[-4,0],[2,3]]))
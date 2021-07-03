/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    let x = 0;
    let count = 0;
    while (x <= nums.length) {
        let len = nums.filter((v,i)=>{
            return v >= x;
        }).length;
        if(x === len) return x;
        x++;
    }
    return -1;
};
console.log(specialArray([0,0]))
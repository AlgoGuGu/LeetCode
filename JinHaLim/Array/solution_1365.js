/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    return nums.reduce((list,ele) =>{
        list.push(nums.reduce((acc,curr) => {
            if(ele > curr) acc++;
            return acc;
        },0));
        return list;
    },[]);
};
console.log(smallerNumbersThanCurrent([8,1,2,2,3]))
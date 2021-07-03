/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let numsMap = nums.reduce((acc,curr) => {
        if (acc.has(curr)) {
            acc.set(curr,acc.get(curr) + 1);
        } 
        else{
            acc.set(curr,1);
        }
        return acc;
    },new Map());
    let arr = [];
    numsMap.forEach((val,key) => {
        const obj = {
            num : key,
            freq : val,
        };
        arr.push(obj);
    });
    
    arr.sort((a,b) => {
        if(a.freq === b.freq){
            return b.num-a.num;
        }
        else{
            return a.freq-b.freq;
        }
    });
    return arr.reduce((acc,curr)=>{
        const num = curr.num;
        const freq = curr.freq;
        for (let i = 0; i < freq; i++) {
            acc.push(num);
        }
        return acc;
    },[]);
    
};
console.log(frequencySort([1,1,2,2,2,3]));
console.log(frequencySort([2,3,1,3,2]));
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    return Math.max.apply(null,accounts.reduce((acc,curr) => {
        // console.log(curr)
        acc.push(curr.reduce((sum,ele)=>{
            sum += ele;
            return sum;
        },0));
        return acc;
    },[]));
};
console.log(maximumWealth([[1,2,3],[3,2,1]]))
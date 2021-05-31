/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    salary.sort((a,b) => a-b);
    salary = salary.splice(1,salary.length-2);
    return (salary.reduce((acc,curr) => {
        acc += curr;
        return acc;  
    },0)/salary.length).toFixed(5);
};
console.log(average([8000,9000,2000,3000,6000,1000]))
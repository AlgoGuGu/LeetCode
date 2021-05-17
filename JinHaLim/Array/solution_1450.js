/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    return startTime.reduce((acc,curr,index) =>{
        if(curr <= queryTime && endTime[index] >= queryTime) acc += 1;
        return acc;
    },0);
};
console.log(busyStudent([1,2,3],[3,2,7],4))
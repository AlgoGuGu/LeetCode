/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
    // 1950~2050 100년
    // 1961 0~11 11+
    // 1960 1971  10 ~ 21+
    let year = logs.reduce((acc,curr) =>{
        for (let i = curr[0]-1950; i < curr[1]-1950; i++) {
            acc[i] += 1
        }
        return acc;
    },new Array(100).fill(0));
    return year.indexOf(Math.max.apply(null,year))+1950;
};
console.log(maximumPopulation([[1950,1961],[1960,1971],[1970,1981]]))
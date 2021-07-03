/**
 * @param {number[][]} points
 * @return {number}
 */
var secondsPath = function(curr, next){
    return Math.max(Math.abs(curr[0]-next[0]),Math.abs(curr[1] - next[1]));
}
var minTimeToVisitAllPoints = function(points) {
    let currentPoint = points[0];
    let count = 0;
    for (let i = 1; i < points.length; i++) {
        const ele = points[i];
        count += secondsPath(currentPoint, ele);
        currentPoint = ele;
    }
    return count;
};
console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]))
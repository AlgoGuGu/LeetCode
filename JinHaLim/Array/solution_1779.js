/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    let minAt = -1;
    let minDistance = Number.MAX_SAFE_INTEGER;
    points.forEach((point,i) => {
        if(x === point[0] || y === point[1]){
            const nextDistance = getManhattonDistance([x,y], point);
            if (minDistance > nextDistance) {
                minDistance = nextDistance;
                minAt = i;
            }
        }
    })
    return minAt;
};

function getManhattonDistance(p1, p2) {
    return Math.abs(p1[0]-p2[0]) + Math.abs(p1[1]-p2[1]);
}
console.log(nearestValidPoint(3,4,[[1,2],[3,1],[2,4],[2,3],[4,4]]))
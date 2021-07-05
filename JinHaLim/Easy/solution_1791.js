/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    for (let i = 0; i < 2; i++) {
        for (let j = 1; j < edges.length; j++) {
            if (edges[j].includes(edges[0][i])) {
                return edges[0][i];
            }
            else{
                break;
            }
            
        }
        
    }
};
console.log(findCenter([[1,2],[2,3],[4,2]]))
console.log(findCenter([[1,2],[5,1],[1,3],[1,4]]))
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let cityMap = new Map();
    let result = '';
    for (let i = 0; i < paths.length; i++) {
        cityMap.set(paths[i][0],paths[i][1]);
        result = paths[i][1];        
    }
    while (cityMap.get(result) !== undefined) {
        result = cityMap.get(result);
    }
    return result;
    
};
console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]));
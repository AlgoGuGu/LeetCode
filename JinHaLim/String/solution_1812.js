/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    const column = coordinates[0].charCodeAt() - 'a'.charCodeAt(); 
    const row = coordinates[1];
    console.log(column % 2 === 0,row % 2 === 1)
    if(column % 2 === 0 ){ 
        return (row % 2 === 0);
    }
    else {
        return (row % 2 === 1);
    }     
};
console.log(squareIsWhite("h8"))
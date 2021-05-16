/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    return image.reduce((acc,curr) => {
        acc.push(curr.reverse().reduce((acc2,curr2) => {
            if (curr2 === 0) {
                acc2.push(1);
            }else if(curr2 === 1){
                acc2.push(0);
            }
            return acc2;
        },[]));
        return acc;
    },[]);
};
console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))
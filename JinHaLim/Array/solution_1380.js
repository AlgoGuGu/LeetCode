/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const ele = matrix[i][j];
            const row = [];
            matrix.forEach(v => {
                v.forEach((v2,j2)=> {
                    if(j2 === j) row.push(v2);
                });
            });
            if(ele !== Math.min.apply(null,matrix[i]) || 
                ele !== Math.max.apply(null,row)) {continue;}
            return [ele];
        }
    }
    return [];
};
console.log(luckyNumbers([[36376,85652,21002,4510],[68246,64237,42962,9974],[32768,97721,47338,5841],[55103,18179,79062,46542]]))
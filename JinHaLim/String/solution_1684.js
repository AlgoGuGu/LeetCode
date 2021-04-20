/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let allowedList = allowed.split("");
    let sum = 0;
    
    words.forEach((ele,index) => {
        allowedList.forEach(al => {
            let regexAll = new RegExp(al,"g");
            ele = ele.replace(regexAll,'');
        });
        if(ele === '') sum ++;
    });
    return sum;
};
console.log(countConsistentStrings("ab",["ad","bd","aaab","baa","badab"]));
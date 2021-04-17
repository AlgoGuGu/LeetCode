/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let resultList = [];
    words.forEach((word,index)=> {
        word.split('').forEach(ele => {
            let num = ele.charCodeAt() - 'a'.charCodeAt();
            if(resultList[index] === undefined) resultList[index] = morse[num];  
            else resultList[index] += morse[num];  
        });
    });
    console.log(resultList);
    let morseList = resultList.reduce(function(items,item) {
        if (item in items) items[item]++;
        else items[item] = 1;
        return items;
    },{});
    return Object.keys(morseList).length;
};
console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
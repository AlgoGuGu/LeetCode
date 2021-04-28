/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    return words.reduce((arr,curr,index) => {
        for (let i = 0; i < words.length; i++) {
            if(i !== index ) {
                if(words[i].match(curr) !== null && !arr.find(ele => ele === curr))  {
                    arr.push(curr);
                }
                // console.log(words[i],curr,words[i].match(curr))
            }
        }
        return arr;
    },[]);
};
console.log(stringMatching(["leetcoder","leetcode","od","hamlet","am"]))
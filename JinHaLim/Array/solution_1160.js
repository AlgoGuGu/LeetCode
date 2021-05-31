/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let result = [];
    const charMap = chars.split('').reduce((acc,curr)=>{
        if(acc.has(curr)) acc.set(curr,acc.get(curr)+1);
        else acc.set(curr,1);
        return acc;
    },new Map());
    loop:
    for (let i = 0; i < words.length; i++) {
        const ele = words[i].split('');
        const eleMap = ele.reduce((acc,curr)=>{
            if(acc.has(curr)) acc.set(curr,acc.get(curr)+1);
            else acc.set(curr,1);
            return acc;
        },new Map());
        const filter = [...eleMap.keys()].filter(v => {
            if(![...charMap.keys()].includes(v)){
                return v;
            }
            else{
                if(charMap.get(v) < eleMap.get(v)){
                    return v;
                }
            }
        });
        if (filter.length === 0) {
            result.push(words[i]);
        }
    }
    return result.reduce((acc,curr)=>{
        acc += curr.length;
        return acc;
    },0);
};
console.log(countCharacters(["cat","bt","hat","tree"],"atach"))
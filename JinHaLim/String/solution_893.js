/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function(A) {
    const groups = new Set();
    
    for (const word of A) {
        const counts = new Array(52).fill(0);
        
        for (let i = 0; i < word.length; i++) {
            const index = word.charCodeAt(i) - 97;
            //알파벳 순서
            if (i % 2 === 0) counts[index]++;
            else counts[index + 26]++;
            //짝수 : counts[알파벳 순서]
            //홀수: counts[알파벳 순서 + 26 ]
        }        
        console.log(counts);
        const key = counts.join("#");
        console.log(key)
        groups.add(key);
    }
    console.log(groups)
    //구성이 다른 것들의 갯수
    return groups.size;
};
console.log(numSpecialEquivGroups(["abcd","cdab","cbad","xyzz","zzxy","zzyx"]))
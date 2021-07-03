/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    return words[0].split('').reduce((acc,curr) => {
        for (let i = 1; i < words.length; i++) {
            if (!words[i].includes(curr)) {
                return acc;
            }
            words[i] = words[i].replace(curr,'');
        }
        acc.push(curr);
        return acc;
    },[]);
};
console.log(commonChars(["cool","lock","cook"]))
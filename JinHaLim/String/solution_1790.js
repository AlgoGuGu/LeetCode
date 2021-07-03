/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    let string1 = s1.split('');
    let string2 = s2.split('');
    let index = 0;
    let saveChar = '';
    if(s1 === s2) return true;
    for (let i = 0; i < string1.length; i++) {
        if(string1[i] !== string2[i] && saveChar === ''){
            saveChar = string2[i];
            index = i;
        }
        else if(string1[i] !== string2[i] && saveChar !== '') {
            string2[index] = string2[i];
            string2[i] = saveChar;
            console.log(string1.join(''),string2.join(''))
            if(string1.join('') === string2.join('')) return true;
            return false;
        }
    }
    return false;
};
console.log(areAlmostEqual("bank","kanb"))
console.log(areAlmostEqual("siyolsdcjthwsiplccjbuceoxmpjgrauocx","siyolsdcjthwsiplccpbuceoxmjjgrauocx"))
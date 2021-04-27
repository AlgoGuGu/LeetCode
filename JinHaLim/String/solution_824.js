/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let result = [];
    let string = S.split(' ');
    let countMa = 1;
    string.forEach(ele => {
        let word = ele.split('');
        //모음
        if(vowels.has(word[0].toLowerCase())){
            word.push('ma');
        }
        else{  //자음
            let vowel = word[0];
            word = word.slice(1);
            word.push(vowel);
            word.push('ma');
        }
        word.push('a'.repeat(countMa));
        result.push(word.join(''));
        countMa++;
    });

    return result.join(' ');

};
console.log(toGoatLatin("I speak Goat Latin"));
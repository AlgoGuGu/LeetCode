/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let a = s.substring(0, s.length/2);
    let b = s.substring(s.length/2, s.length);
    vowels.forEach(ele => {
        let regexAll = new RegExp(ele,"g");
        a = a.replace(regexAll,'');
        b = b.replace(regexAll,'');
    });
    // console.log(a,b);
    const aLen = s.length - a.length;
    const bLen = s.length - b.length;
    return (aLen === bLen);

};
console.log(halvesAreAlike("book"))
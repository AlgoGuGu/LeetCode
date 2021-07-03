/**
 * @param {string} s
 * @return {number}
 */
// let reverseStringBoolean = function(s){
//     let string = s.split('').reverse().join('');
//     return string === s;
// }
// var removePalindromeSub = function(s) {
//     let start = 0;
//     let end = s.length;
//     let sum = 0;
//     let string = s;
//     while (string.length > 0) {
//         let slice = string.substring(start,end);
//         console.log(slice,start,end);
//         if(reverseStringBoolean(slice)){
           
//             sum++;
//             // console.log(string.substring(end));
//             // console.log(':'+string.substring(end,string.length+1))
//             string = string.substring(end,string.length+1);
//             end = string.length;
//         }else{
//             end--;
//         }
//     }
//     return sum;
// };
//solution....
var removePalindromeSub = function(s) {
    return !s.length ? 0 : s === [...s].reverse().join('') ? 1 : 2 
};

console.log(removePalindromeSub("baaba"))
console.log(removePalindromeSub("abb"))
console.log(removePalindromeSub("ababa")) 
console.log(removePalindromeSub("bbaabaaa")) 


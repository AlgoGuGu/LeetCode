/**
 * @param {string} s
 * @return {number}
 */

// var countBinarySubstrings = function(s) {
//     let sum = 0;
//     let oneString = '';
//     let zeroString = '';
//     for (let i = 1; i <= s.length/2  ; i++) {
//         oneString = '1' + oneString + '0';
//         zeroString = '0' + zeroString + '1';
//         let re = new RegExp(oneString,'gi')
//         let oneMatchValue = s.match(re);
//         re = new RegExp(zeroString,'gi')
//         let zeroMatchValue = s.match(re);
//         if(oneMatchValue !== null ){
//             console.log(oneMatchValue)
//             // subStrings.shift(oneMatchValue);
//             sum += oneMatchValue.length;
//         }      
//         if(zeroMatchValue !== null){
//             console.log(zeroMatchValue)
//             // subStrings.shift(zeroMatchValue);
//             sum += zeroMatchValue.length;
//         }
//         if(oneMatchValue === null && zeroMatchValue === null) break;
        
//     }
//     // console.log(subStrings)
//     return sum;
// };
var countBinarySubstrings = function(s) {
    let old = '';
    let down = 0;
    let sum = 0 ;
    let arr = 0; //누적
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        if(i !== 0 && arr === 0 && max > 0){
            sum += max ;
            max = 0;
            i -= down;
            down = 0;
            old = '';
            // console.log('6:',arr,max,sum,i)
        }
        else if(s[i] === s[i + 1] && old === ''){
            arr += 1;
            // console.log('1:'+ arr,max)
        }
        else if(s[i] === s[i + 1] && old === s[i]){
            arr -= 1;
            down += 1;
            // console.log('2:'+ arr,max,down)
        }
        else if(s[i] !== s[i + 1] && max === 0){
            arr +=1;  //s[i]까지 세고서 max 비교
            max = Math.max(arr,max);
            arr -= 1;
            down += 1;
            old = s[i+1];
            // console.log('3:',arr,max,sum,down,s[i])
        }
        else if(s[i] !== s[i + 1] && max > 0){
            sum += max - arr;  
            arr = 0;
            max = 0;
            i -= down ;
            down = 0;
            old = '';
            // console.log('4:'+ arr,max,sum)
        }
        else{
            // console.log('5:',s[i],s[i+1],arr,max,old, i)
        }
    }
    return sum;
};

console.log(countBinarySubstrings("00110"))
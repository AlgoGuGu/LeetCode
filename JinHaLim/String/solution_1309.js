/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let string = [];
    let string2 = [];
    
    for(let i = s.length-1  ;i >= 0;i--){
        
        if(s[i] ==='#') {
            // console.log(s.slice(i-2,i));
            string.push(String.fromCharCode(parseInt(s.slice(i-2,i))+ 'a'.charCodeAt()-1));
            s = s.slice(0,i-2);
            i = i -2;
        }
        else{
            // console.log(s.slice(i,i+1));
            string.push(String.fromCharCode(parseInt(s.slice(i,i+1))+ 'a'.charCodeAt()-1));
            s = s.slice(0,i+1)
        }
        // console.log(s)
        
    } 
    string.reverse();
    return string2.join('') +string.join('');
};
console.log(freqAlphabets("10#11#12"))
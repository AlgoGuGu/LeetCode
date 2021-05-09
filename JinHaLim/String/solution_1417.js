/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    let number = s.replace(/[a-z]/g,'');
    let string = s.replace(/[0-9]/g,'');
    if(number.length === 0 ) return string.length === 1? s: '';
    else if(string.length === 0 ) return number.length === 1? s: '';
    let len = Math.max(number.length,string.length);
    if(string.length > number.length){
        return string.split('').reduce((arr,curr,index) => {
            console.log(curr,arr, number.charAt(index))
            arr.push(curr);
            if(number.charAt(index)) arr.push(number.charAt(index));
            return arr;
        },[]).join('');
    }
    else{
        return number.split('').reduce((arr,curr,index) => {
            arr.push(curr);
            if(string.charAt(index)) arr.push(string.charAt(index));
            return arr;
        },[]).join('');
    }
};

console.log(reformat("ab123"));
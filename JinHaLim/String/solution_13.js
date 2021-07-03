/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0;
    let romanMap = new Map();
    romanMap.set('I',1);
    romanMap.set('V',5);
    romanMap.set('X',10);
    romanMap.set('L',50);
    romanMap.set('C',100);
    romanMap.set('D',500);
    romanMap.set('M',1000);
    let romans = s.split('');
    let saveInt = '';
    for (let i = 0; i < romans.length; i++) {
       if(romans[i] === 'I' && (romans[i+1] === 'V' || romans[i+1] === 'X')){
        sum += romanMap.get(romans[i+1]) - 1;
        i++;
       }
       else if(romans[i] === 'X' && (romans[i+1] === 'L' || romans[i+1] === 'C')){
        sum += romanMap.get(romans[i+1]) - 10;
        i++;
       }
       else if(romans[i] === 'C' && (romans[i+1] === 'D' || romans[i+1] === 'M')){
        sum += romanMap.get(romans[i+1]) - 100;
        i++;
        }
       else{
        sum += romanMap.get(romans[i]);
       }
    }
    return sum;
};
console.log(romanToInt("IV"))
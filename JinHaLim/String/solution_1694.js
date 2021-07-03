/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
    const re1 = new RegExp('-','gi');
    const re2 = new RegExp(' ','gi');
    number = number.replace(re1, '');
    number = number.replace(re2,'');
    let array = [];
    if(number.length < 4) return number;
    while (number.length > 0) {
        if(number.length > 4){
            array.push(number.substring(0,3));
            number = number.substring(3);
        }
        else if(number.length === 4){
            array.push(number.substring(0,2));
            number = number.substring(2);
        }
        else{
            array.push(number.substring(0,3));
            number = number.substring(3);
        }

        console.log(number,number.length)
    }
    return array.join('-');
};
console.log(reformatNumber("1-23-45 6"))
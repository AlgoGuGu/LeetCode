/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let stinrg = '';
    let result = s.split('').sort().reduce(function(items, item){
        if (item in items) {
            items[item]++;
        }
        else{
            items[item] = 1;
        }
        return items;
    },[]);
    
    
    return result ;
};
console.log(sortString("aaaabbbbbcccc"));
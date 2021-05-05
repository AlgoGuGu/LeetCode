/**
 * @param {string} s
 * @return {string}
 */

let largeFounder = function(s) {
    return s.sort().reverse()[0];
}
let smallFounder = function(s) {
    return s.sort()[0];
}
var sortString = function(s) {
    let string = s.split('');
    // console.log(stringCount)
    let result = [];
    while (string.length > 0) {

        string = string.sort();
        let stringCount = string.reduce(function(items,item){
            if(item in items) {items[item]++;}
            else {items[item] = 1;}
            return items;
        },{});
        
        large = largeFounder(string)
        // console.log('large: ',large);
        for (const item in stringCount) {
            if(stringCount[item] > 0){
                let index = string.indexOf(item);
                result.push(item);
                // console.log('largepush:',item)
                string.splice(index,1);
                if(item === large) break; 
            }
                   
        }
        string = string.sort().reverse();
        stringCount = string.reduce(function(items,item){
            if(item in items) {items[item]++;}
            else {items[item] = 1;}
            return items;
        },{});
        // console.log(stringCount)
        small = smallFounder(string)
        // console.log('small:',small);
        for (const item in stringCount ) {
            if(stringCount[item] > 0){
                let index = string.indexOf(item);
                result.push(item);
                // console.log('smallpush:',item)
                string.splice(index, 1);
                if(item === small) break; 
            }         
        }
        
    }
    return result.join('');
};
console.log(sortString("aaaabbbbbcccc"));
console.log(sortString("rat"));
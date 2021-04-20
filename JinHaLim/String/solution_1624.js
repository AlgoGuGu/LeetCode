/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let max = -1;
    let betweenMap =  s.split("").reduce(function(items,item){
        let index = s.indexOf(item);
        let lastIndex = s.lastIndexOf(item);
        if(index !== lastIndex){
            items[item] = lastIndex-index-1;
        }
        else if(index !== -1 && index === lastIndex){
            items[item] = -1;
        }
        // else{
        //     items[item] = -1;
        // }
        // console.log(item, items[item])
        if(max < items[item]) max = items[item];
        return items;
    },{});
    return max;
};
console.log(maxLengthBetweenEqualCharacters("cbzxy"));
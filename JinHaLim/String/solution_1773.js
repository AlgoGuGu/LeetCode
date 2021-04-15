/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let ruleCount = 0;
    let secrchFunction = function(num) {
        let sum = 0;
        for (let i = 0; i < items.length; i++) {
            if(items[i][num] === ruleValue) sum++;
        }
        return sum;
    };

    switch (ruleKey) {
        case 'type':
            ruleCount = secrchFunction(0);
            break;
        case 'color':
            ruleCount = secrchFunction(1);
            break;
        case 'name':
            ruleCount = secrchFunction(2);
            break;
        default:
            break;
    }
    return ruleCount;
};
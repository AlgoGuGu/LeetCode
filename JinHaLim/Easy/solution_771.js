/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const jewelArr = jewels.split('');
    return stones.split('').reduce((acc,curr) => {
        if (jewelArr.includes(curr)) {
            acc += 1;
        }
        return acc;
    },0);
};
console.log(numJewelsInStones("aA","aAAbbbb"));
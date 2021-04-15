/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
const countMatches = function(items, ruleKey, ruleValue) {
  const stoiMap = new Map([
    ['type', 0],
    ['color', 1],
    ['name', 2],
  ]);
  const focusIdx = stoiMap.get(ruleKey);
  return items.reduce((acc, curr) => {
    if (curr[focusIdx] === ruleValue) {
      acc += 1;
    }
    return acc;
  }, 0);
};

console.log(countMatches([['phone', 'blue', 'pixel'], ['computer', 'silver', 'lenovo'], ['phone', 'gold', 'iphone']], 'color', 'silver'));

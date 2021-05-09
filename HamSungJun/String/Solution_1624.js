/**
 * @param {string} s
 * @return {number}
 */
const maxLengthBetweenEqualCharacters = function(s) {
  const alphaCountMap = new Map();
  for (let i = 0; i < s.length; i++) {
    const nextChar = s[i];
    if (alphaCountMap.has(nextChar)) {
      const history = alphaCountMap.get(nextChar);
      history.lastAt = i;
      history.distance = history.lastAt - history.firstAt;
      alphaCountMap.set(nextChar, history);
    } else {
      alphaCountMap.set(nextChar, {firstAt: i});
    }
  }
  const filtered = [...alphaCountMap].filter((item) => 'distance' in item[1]);
  if (filtered.length === 0) {
    return -1;
  }
  return filtered.reduce((acc, curr) => {
    const nextDistance = curr[1]['distance'] - 1;
    acc = Math.max(acc, nextDistance);
    return acc;
  }, Number.MIN_SAFE_INTEGER);
};

console.log(maxLengthBetweenEqualCharacters('cabbac'));

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const areAlmostEqual = function(s1, s2) {
  if (s1 === s2) return true;
  let diffCount = 0;
  const diffAt = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      diffCount += 1;
      diffAt.push(i);
      if (diffCount >= 3) {
        return false;
      }
    }
  }
  return (diffCount === 2) && (s1[diffAt[1]] === s2[diffAt[0]] && s2[diffAt[1]] === s1[diffAt[0]]);
};

console.log(areAlmostEqual('bank', 'kanb'));

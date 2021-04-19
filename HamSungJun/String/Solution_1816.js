/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const truncateSentence = function(s, k) {
  const sArr = s.split(' ');
  return sArr.length <= k ? s : sArr.slice(0, k).join(' ');
};

console.log(truncateSentence('What is the solution to this problem', 4));

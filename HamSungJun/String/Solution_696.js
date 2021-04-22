/**
 * @param {string} s
 * @return {number}
 */
const countBinarySubstrings = function(s) {
  /**
     * (10|01)
     * (1100|0011)
     * (111000|000111)
     * (11110000|00001111)
     * TimeOut, Failed
     */
  if (s.length === 1) return 0;
  let totalCount = 0;
  let oneFirstLetter = '';
  let zeroFirstLetter = '';
  while (oneFirstLetter.length <= s.length) {
    oneFirstLetter = '1' + oneFirstLetter + '0';
    zeroFirstLetter = '0' + zeroFirstLetter + '1';
    for (let i = 0; i <= s.length - oneFirstLetter.length; i++) {
      const nextSlice = s.slice(i, i+oneFirstLetter.length);
      if (nextSlice === oneFirstLetter) {
        totalCount += 1;
      }
      if (nextSlice === zeroFirstLetter) {
        totalCount += 1;
      }
    }
  }
  return totalCount;
};

console.log(countBinarySubstrings('10101'));

/**
 * @param {string} s
 * @return {string}
 */
const makeGood = function(s) {
  return recMakeGood(s.split(''));
};

const recMakeGood = (sArr) => {
  for (let i = 0; i < sArr.length - 1; i++) {
    if (isBad(sArr[i], sArr[i+1])) {
      sArr.splice(i, 2);
      return recMakeGood(sArr);
    }
  }
  return sArr.join('');
};

const isBad = (s1, s2) => {
  return Math.abs(s1.charCodeAt(0) - s2.charCodeAt(0)) === 32;
};

console.log(makeGood('leEeetcode'));

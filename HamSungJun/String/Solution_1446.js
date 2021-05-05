/**
 * @param {string} s
 * @return {number}
 */
const maxPower = function(s) {
  let maxCount = 1;
  let subCount = 1;
  let focusingChar = s[0];
  for (let i = 1; i < s.length; i++) {
    if (focusingChar === s[i]) {
      subCount += 1;
    } else {
      focusingChar = s[i];
      subCount = 1;
    }
    maxCount = Math.max(maxCount, subCount);
  }
  return maxCount;
};

console.log(maxPower('triplepillooooow'));

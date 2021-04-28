/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = function(gain) {
  let currentAlt = 0;
  let maxAlt = 0;
  gain.forEach((i) => {
    currentAlt += i;
    maxAlt = Math.max(maxAlt, currentAlt);
  });
  return maxAlt;
};


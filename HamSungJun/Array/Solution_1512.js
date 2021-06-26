/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = function(nums) {
  const numCountMap = new Map();
  const numPairs = 0;
  nums.forEach((num) => {
    numCountMap.set(num, (numCountMap.get(num) || 0) + 1);
  });
  for (const count of numCountMap.values()) {
    if (count >= 2) {
      numPairs += (count * (count - 1)) / 2;
    }
  }
  return numPairs;
};


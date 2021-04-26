/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = function(nums) {
  const countMap = new Map();
  nums.forEach((num) => {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  });

  return nums.map((num) => {
    let smallerCount = 0;
    for (const [n, count] of countMap.entries()) {
      if (num > n) {
        smallerCount += count;
      }
    }
    return smallerCount;
  });
};


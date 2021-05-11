/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function(nums, n) {
  const shuffledArr = new Array(nums.length);
  let p0 = 0;
  let p1 = 0;
  let p2 = n;
  while (p0 <= (n*2 - 2)) {
    shuffledArr[p0] = nums[p1];
    shuffledArr[p0 + 1] = nums[p2];
    p0 += 2;
    p1 += 1;
    p2 += 1;
  }
  return shuffledArr;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));

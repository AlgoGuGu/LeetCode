/**
 * @param {number[]} nums
 * @return {number[]}
 */
const decompressRLElist = function(nums) {
  const out = '';
  for (let i = 0; i <= (nums.length / 2) - 1; i++) {
    const nextIdx = (2*i);
    const [freq, val] = [nums[nextIdx], nums[nextIdx+1]];
    out += repeatStr(freq, ''+val);
  }
  return out.trim().split(' ');
};

const repeatStr = (n, str) => {
  let out = '';
  for (let i = 0; i < n; i++) {
    out += ' ' + str;
  }
  return out;
};

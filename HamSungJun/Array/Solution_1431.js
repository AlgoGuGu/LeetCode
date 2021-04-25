/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function(candies, extraCandies) {
  const maxCandy = candies.reduce((acc, curr) => {
    acc = Math.max(acc, curr);
    return acc;
  }, Number.MIN_SAFE_INTEGER);
  return candies.map((candy) => candy + extraCandies >= maxCandy);
};


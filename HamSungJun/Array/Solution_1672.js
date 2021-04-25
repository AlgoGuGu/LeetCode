/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function(accounts) {
  let maxWealth = Number.MIN_SAFE_INTEGER;
  accounts.forEach((account) => {
    maxWealth = Math.max(maxWealth, sum(account));
  });
  return maxWealth;
};

const sum = (arr) => arr.reduce((acc, curr) => {
  acc += curr; return acc;
}, 0);

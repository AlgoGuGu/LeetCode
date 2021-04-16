/**
 * @param {number} n
 * @return {string}
 */
const generateTheString = function(n) {
  const oddSeries = makeOddSeries(n);
  let charCode = 97;
  return oddSeries.reduce((acc, curr) => {
    for (let i = 0; i < curr; i++) {
      acc += String.fromCharCode(charCode);
    }
    charCode += 1;
    return acc;
  }, '');
};

const makeOddSeries = function(num) {
  const oddSeries = [];
  while (num > 0) {
    for (let i = num; i >= 1; i--) {
      if (i % 2 !== 0) {
        oddSeries.push(i);
        num -= i;
        break;
      }
    }
  }
  return oddSeries;
};

console.log(generateTheString(4));

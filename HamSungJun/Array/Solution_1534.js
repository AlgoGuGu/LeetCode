/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
const countGoodTriplets = function(arr, a, b, c) {
  let tripletCount = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i+1; j < arr.length - 1; j++) {
      for (let k = j+1; k < arr.length; k++) {
        tripletCount += isGoodTriplets({
          subArr: [arr[i], arr[j], arr[k]],
          a,
          b,
          c,
        });
      }
    }
  }
  return tripletCount;
};

const isGoodTriplets = ({subArr, a, b, c}) => {
  const [i, j, k] = subArr;
  if (!(Math.abs(i - j) <= a)) return 0;
  else if (!(Math.abs(j - k) <= b)) return 0;
  else if (!(Math.abs(i - k) <= c)) return 0;
  return 1;
};

console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3));

/**
 * @param {string} S
 * @return {string}
 */
const reverseOnlyLetters = function(S) {
  let p1 = 0;
  let p2 = S.length - 1;
  S = S.split('');
  while (p1 < p2) {
    if (!isLetter(S[p1])) {
      p1 += 1;
      continue;
    }
    if (!isLetter(S[p2])) {
      p2 -= 1;
      continue;
    }
    swap(p1, p2, S);
    p1 += 1;
    p2 -= 1;
  }
  return S.join('');
};

const isLetter = (char) => {
  const charCode = char.charCodeAt(0);
  return (65 <= charCode && charCode <= 90) || (97 <= charCode && charCode <= 122);
};

const swap = (i, j, arr) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

console.log(reverseOnlyLetters('a-bC-dEf-ghIj'));

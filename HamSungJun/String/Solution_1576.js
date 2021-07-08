/**
 * @param {string} s
 * @return {string}
 */
const modifyString = function(s) {
  let out = '';
  const alphabets = Array.from(new Array(26), (x, i) => String.fromCharCode(97 + i));
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '?') {
      out += pick(out[i-1], s[i+1], alphabets);
    } else {
      out += s[i];
    }
  }
  return out;
};

const pick = (s1 = '', s2 = '', alphabets) => {
  return alphabets.find((alpha) => ![s1, s2].includes(alpha));
};

console.log(modifyString('??yw?ipkj?'));

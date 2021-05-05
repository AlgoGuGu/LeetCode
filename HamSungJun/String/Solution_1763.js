/**
 * @param {string} s
 * @return {string}
 */
const longestNiceSubstring = function(s) {
  return recLNS(s, s.length);
};

const recLNS = (s, windowSize) => {
  if (windowSize === 0) return '';
  for (let i = 0; i <= s.length - windowSize; i++) {
    const nextSlice = s.slice(i, i + windowSize);
    if (isLNS(nextSlice)) {
      return nextSlice;
    }
  }
  return recLNS(s, windowSize - 1);
};

const isLNS = (s) => {
  const alphaSet = new Set(s.split(''));
  for (const alpha of alphaSet.values()) {
    const charCode = alpha.charCodeAt(0);
    if (65 <= charCode && charCode <= 90) {
      if (!alphaSet.has(String.fromCharCode(charCode + 32))) return false;
    } else {
      if (!alphaSet.has(String.fromCharCode(charCode - 32))) return false;
    }
  }
  return true;
};

console.log(longestNiceSubstring('YazaAay'));

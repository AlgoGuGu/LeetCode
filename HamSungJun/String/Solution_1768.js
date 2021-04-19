/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function(word1, word2) {
  return zip(word1, word2);
};

const zip = function(word1, word2) {
  const maxLen = Math.max(word1.length, word2.length);
  const minLen = Math.min(word1.length, word2.length);
  let out = '';
  for (let i = 0; i < minLen; i++) {
    out += word1[i] + word2[i];
  }
  out += word1.slice(minLen, maxLen) + word2.slice(minLen, maxLen);
  return out;
};

console.log(mergeAlternately('ab', 'pqrs'));

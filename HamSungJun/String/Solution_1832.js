/**
 * @param {string} sentence
 * @return {boolean}
 */
const checkIfPangram = function(sentence) {
  if (sentence.length < 26) return false;
  const alphaSet = new Set();
  for (let i = 97; i <= 122; i++) {
    alphaSet.add(String.fromCharCode(i));
  }
  for (let i = 0; i < sentence.length; i++) {
    if (alphaSet.has(sentence[i])) {
      alphaSet.delete(sentence[i]);
    }
  }
  return alphaSet.size === 0;
};

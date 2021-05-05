/**
 * @param {string} S
 * @return {string}
 */
const toGoatLatin = function(S) {
  const strArr = S.split(' ');
  return strArr.reduce(applyRules, '').trim();
};

const applyRules = (acc, word, index) => {
  const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const isVowelStart = vowelSet.has(word[0]);
  if (!isVowelStart) {
    const firstLetter = word[0];
    word = word.slice(1) + firstLetter;
  }
  word += 'ma';
  for (let i = 0; i < index + 1; i++) {
    word += 'a';
  }
  acc += (word + ' ');
  return acc;
};

console.log(toGoatLatin('123 456 789'));

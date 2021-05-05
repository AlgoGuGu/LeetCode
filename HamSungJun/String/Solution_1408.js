/**
 * @param {string[]} words
 * @return {string[]}
 */
const stringMatching = function(words) {
  const subStrings = [];
  words.sort((a, b) => {
    const aLen = a.length;
    const bLen = b.length;
    return (aLen > bLen) - (aLen < bLen);
  });
  for (let i = 0; i < words.length - 1; i++) {
    const matcher = words[i];
    for (let j = i+1; j < words.length; j++) {
      const target = words[j];
      if (target.includes(matcher)) {
        subStrings.push(matcher);
        break;
      }
    }
  }
  return subStrings;
};

console.log(stringMatching(['leetcode', 'et', 'code']));

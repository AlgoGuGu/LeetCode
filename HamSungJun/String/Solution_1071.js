/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function(str1, str2) {
  const longer = str1.length >= str2.length ? str1 : str2;
  const shorter = longer === str1 ? str2 : str1;
  let nextStr = shorter;
  while (nextStr !== '') {
    const nextRegex = new RegExp(nextStr, 'g');
    if (longer.replace(nextRegex, '') === '' && shorter.replace(nextRegex, '') === '') {
      break;
    } else {
      nextStr = nextStr.slice(1);
    }
  }
  return nextStr;
};

console.log(gcdOfStrings('ABABAB', 'ABAB'));

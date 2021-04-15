/**
 * @param {string} s
 * @return {string}
 */
const sortString = function(s) {
  const sArr = s.split('');
  sArr.sort();
  let out = '';
  let lastAppended = '';
  while (sArr.length !== 0) {
    lastAppended = getNextSmallest(lastAppended, sArr);
    if (lastAppended) {
      out += lastAppended;
    } else {
      while (true) {
        lastAppended = getNextLagest(lastAppended, sArr);
        if (!lastAppended) {
          break;
        }
        out += lastAppended;
      }
    }
  }
  return out;
};

const getNextSmallest = function(lastAppended, sArr) {
  if (!lastAppended) return sArr.splice(0, 1)[0];
  for (let i = 0; i < sArr.length; i++) {
    if (lastAppended < sArr[i]) {
      return sArr.splice(i, 1)[0];
    }
  }
  return '';
};

const getNextLagest = function(lastAppended, sArr) {
  if (!lastAppended) return sArr.splice(sArr.length - 1, 1)[0];
  for (let i = sArr.length - 1; i >= 0; i--) {
    if (lastAppended > sArr[i]) {
      return sArr.splice(i, 1)[0];
    }
  }
  return '';
};


console.log(sortString('aaaabbbbcccc'));

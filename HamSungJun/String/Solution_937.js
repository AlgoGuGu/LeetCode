/**
 * @param {string[]} logs
 * @return {string[]}
 */
const reorderLogFiles = function(logs) {
  logs.sort((a, b) => {
    const splitA = a.split(' ');
    const splitB = b.split(' ');
    const isDigitA = isDigit(splitA[1]);
    const isDigitB = isDigit(splitB[1]);
    if (isDigitA && isDigitB) {
      return 0;
    } else if (isDigitA && !isDigitB) {
      return 1;
    } else if (!isDigitA && isDigitB) {
      return -1;
    } else {
      const joinedWordA = splitA.slice(1).join(' ');
      const joinedWordB = splitB.slice(1).join(' ');
      if (joinedWordA === joinedWordB) {
        return (splitA[0] > splitB[0]) - (splitA[0] < splitB[0]);
      }
      return (joinedWordA > joinedWordB) - (joinedWordA < joinedWordB);
    }
  });
  return logs;
};

const isDigit = (s) => {
  const charCode = s.charCodeAt(0);
  return 48 <= charCode && charCode <= 57;
};
console.log(reorderLogFiles(['a1 9 2 3 1', 'g1 act car', 'zo4 4 7', 'ab1 off key dog', 'a8 act zoo', 'a2 act car']));

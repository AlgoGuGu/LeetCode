/**
 * @param {number} N
 * @return {number}
 */
const rotatedDigits = function(N) {
  const rotateMap = new Map([
    ['0', '0'],
    ['1', '1'],
    ['2', '5'],
    ['3', false],
    ['4', false],
    ['5', '2'],
    ['6', '9'],
    ['7', false],
    ['8', '8'],
    ['9', '6'],
  ]);
  let validCount = 0;
  for (let i = 1; i <= N; i++) {
    const itos = (''+i);
    let out = '';
    let isFailed = false;
    for (let j = 0; j < itos.length; j++) {
      const nextChar = itos[j];
      if (!rotateMap.get(nextChar)) {
        isFailed = true;
        break;
      }
      out += rotateMap.get(nextChar);
    }
    if (out !== itos && !isFailed) {
      validCount += 1;
    }
  }
  return validCount;
};

console.log(rotatedDigits(10));

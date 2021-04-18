/**
 * @param {string} number
 * @return {string}
 */
const reformatNumber = function(number) {
  number = number.replace(/[-\s]/g, '');
  const slices = [];
  let sliced;
  let p = 0;
  while ((sliced = number.slice(p, p+3)).length > 0) {
    slices.push(sliced);
    p += 3;
  }
  if (slices[slices.length - 1].length === 1) {
    const temp = slices[slices.length - 2] + slices[slices.length - 1];
    slices[slices.length - 2] = temp[0] + temp[1];
    slices[slices.length - 1] = temp[2] + temp[3];
  }
  return slices.join('-');
};

reformatNumber('1-234567');

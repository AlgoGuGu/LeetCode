/**
 * @param {number} n
 * @return {string}
 */
const thousandSeparator = function(n) {
  const itos = (''+n);
  if (itos.length <= 3) return itos;
  let out = '';
  let p1 = itos.length;
  let nextSlice = '';
  while ((nextSlice = itos.slice(Math.max(p1 - 3, 0), p1)).length > 0) {
    out = `.${nextSlice}` + out;
    if (p1 < 3) break;
    p1 -= 3;
  }
  return out.slice(1);
};

console.log(thousandSeparator(1256789));

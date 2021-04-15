/**
 * @param {string} coordinates
 * @return {boolean}
 */
const squareIsWhite = function(coordinates) {
  const stoiMap = new Map();
  for (let i = 0; i < 8; i++) {
    stoiMap.set(String.fromCharCode(i+97), i+1);
  }
  return (stoiMap.get(coordinates[0]) + (+coordinates[1])) % 2 !== 0;
};

/**
 * @param {string[][]} paths
 * @return {string}
 */
const destCity = function(paths) {
  const pathMap = new Map([...paths]);
  let start = paths[0][0];
  while (pathMap.has(start)) {
    start = pathMap.get(start);
  }
  return start;
};

destCity([['B', 'C'], ['D', 'B'], ['C', 'A']]);


/**
 * @param {string} path
 * @return {boolean}
 */
const isPathCrossing = function(path) {
  const currentPos = [0, 0];
  const historySet = new Set();
  const moveMaskMap = new Map([
    ['N', [0, 1]],
    ['S', [0, -1]],
    ['E', [1, 0]],
    ['W', [-1, 0]],
  ]);
  historySet.add(currentPos.join(''));
  for (let i = 0; i < path.length; i++) {
    const nextMask = moveMaskMap.get(path[i].charAt(0));
    currentPos[0] += nextMask[0];
    currentPos[1] += nextMask[1];
    const nextPos = currentPos.join('');
    if (historySet.has(nextPos)) return true;
    historySet.add(nextPos);
  }
  return false;
};

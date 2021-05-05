/**
 * @param {string} text
 * @return {number}
 */
const maxNumberOfBalloons = function(text) {
  const alphaCountMap = new Map([
    ['b', 0],
    ['a', 0],
    ['l', 0],
    ['o', 0],
    ['n', 0],
  ]);
  const balloonSet = new Set(['b', 'a', 'l', 'o', 'n']);
  for (let i = 0; i < text.length; i++) {
    const nextAlpha = text[i];
    if (balloonSet.has(nextAlpha)) {
      alphaCountMap.set(nextAlpha, alphaCountMap.get(nextAlpha) + 1);
    }
  }

  ['l', 'o'].forEach((twiceAlpha) => {
    alphaCountMap.set(
        twiceAlpha,
        Math.floor(alphaCountMap.get(twiceAlpha)/2),
    );
  });

  let minCount = Number.MAX_SAFE_INTEGER;
  for (const count of alphaCountMap.values()) {
    minCount = Math.min(minCount, count);
  }
  return minCount;
};

console.log(maxNumberOfBalloons('loonbalxballpoon'));

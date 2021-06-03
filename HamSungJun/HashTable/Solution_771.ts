function numJewelsInStones (jewels: string, stones: string): number {
  const jewelSet = new Set(jewels.split(''))
  let jewelCount = 0
  for (let i = 0; i < stones.length; i++) {
    if (jewelSet.has(stones[i])) {
      jewelCount += 1
    }
  }
  return jewelCount
};

console.log(numJewelsInStones('aA', 'aAAbbb'))

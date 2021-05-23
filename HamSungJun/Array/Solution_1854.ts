function maximumPopulation (logs: number[][]): number {
  const MIN_BIRTH_YEAR = 1950
  const countArray = new Array(100 + 1).fill(0)
  let maxPopulation = Number.MIN_SAFE_INTEGER
  logs.forEach(life => {
    let [birth, death] = life
    birth = birth - MIN_BIRTH_YEAR
    death = death - MIN_BIRTH_YEAR
    for (let i = birth; i < death; i++) {
      const nextYear = i
      countArray[nextYear] += 1
      if (countArray[nextYear] > maxPopulation) {
        maxPopulation = countArray[nextYear]
      }
    }
  })
  console.log(countArray, maxPopulation)
  return (countArray.indexOf(maxPopulation) + MIN_BIRTH_YEAR)
};

console.log(maximumPopulation([[1950, 1961], [1960, 1971], [1970, 1981]]))

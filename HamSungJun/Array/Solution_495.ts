function findPoisonedDuration (timeSeries: number[], duration: number): number {
  const durations: number[][] = [[timeSeries[0], timeSeries[0] + duration - 1]]
  let p = 0
  for (let i = 1; i < timeSeries.length; i++) {
    const [start, end] = [timeSeries[i], timeSeries[i] + duration - 1]
    if (durations[p][1] >= start) {
      durations[p][1] = end
    } else {
      durations.push([start, end])
      p += 1
    }
  }
  return durations.reduce((acc, curr) => {
    acc += (curr[1] - curr[0] + 1)
    return acc
  }, 0)
};

findPoisonedDuration([1, 2, 3, 4, 5], 5)

function slowestKey (releaseTimes: number[], keysPressed: string): string {
  let maxDuration = releaseTimes[0]
  let maxAt = 0
  for (let i = 1; i < releaseTimes.length; i++) {
    const nextDuration = releaseTimes[i] - releaseTimes[i - 1]
    if (maxDuration < nextDuration) {
      maxDuration = nextDuration
      maxAt = i
    } else if (maxDuration === nextDuration) {
      if (keysPressed[maxAt] < keysPressed[i]) {
        maxAt = i
      }
    }
  }
  return keysPressed[maxAt]
};

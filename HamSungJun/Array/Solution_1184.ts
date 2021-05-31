function distanceBetweenBusStops (distance: number[], start: number, destination: number): number {
  let sumClockWise = 0
  let sumCounterClockWise = 0
  let _start = start
  let _destination = destination
  while (true) {
    if (_start === destination) break
    sumClockWise += distance[_start]
    _start = _start + 1
    _start = _start % distance.length
  }
  while (true) {
    if (_destination === start) break
    sumCounterClockWise += distance[_destination]
    _destination = _destination + 1
    _destination = _destination % distance.length
  }
  return Math.min(sumClockWise, sumCounterClockWise)
};

console.log(distanceBetweenBusStops([7, 10, 1, 12, 11, 14, 5, 0], 7, 2))

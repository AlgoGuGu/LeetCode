/**
 * @param {number[][]} points
 * @return {number}
 */
const minTimeToVisitAllPoints = function(points) {
  let timeAcc = 0;
  for (let i = 0; i < points.length - 1; i++) {
    timeAcc += calcTime(points[i], points[i+1]);
  }
  return timeAcc;
};

const calcTime = (p1, p2) => {
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  return Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));
};


function dayOfTheWeek (day: number, month: number, year: number): string {
  const weekday = new Array(7)
  weekday[0] = 'Sunday'
  weekday[1] = 'Monday'
  weekday[2] = 'Tuesday'
  weekday[3] = 'Wednesday'
  weekday[4] = 'Thursday'
  weekday[5] = 'Friday'
  weekday[6] = 'Saturday'
  return weekday[new Date(`${year}-${month > 10 ? '0' + month : month}-${day > 10 ? '0' + day : day}`).getDay()]
};

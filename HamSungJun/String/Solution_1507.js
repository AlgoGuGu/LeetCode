/**
 * @param {string} date
 * @return {string}
 */
const reformatDate = function(date) {
  const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dateSplit = date.split(' ');
  const year = dateSplit[2];
  const month = (monthArray.indexOf(dateSplit[1]) + 1);
  const day = parseInt(dateSplit[0]);
  return `${year}-${month < 10 ? '0'+month : month}-${day < 10 ? '0'+day : day}`;
};

console.log(reformatDate('26th May 1960'));

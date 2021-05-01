/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    date = date.replace(/th|nd|rd|st/,'');
    let formatDate = new Date(date),
        year = formatDate.getFullYear(),
        mon = +formatDate.getMonth()+1,
        day = formatDate.getDate();
    mon = (mon > 9 ? mon: '0'+ mon);
    day = (day > 9 ? day: '0'+ day);
    return [year,mon,day].join('-');
};
console.log(reformatDate("6nd Oct 2052"))
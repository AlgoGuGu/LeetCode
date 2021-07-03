/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    for (let i = 0; i < sandwiches.length; i++) {
        const sandwich = sandwiches[i];
        if (students.indexOf(sandwich) > -1 ) {
            students.splice(students.indexOf(sandwich),1);
        }
        else{
            break;
        }
    }
    return students.length;
};
console.log(countStudents([1,1,0,0],[0,1,0,1]))
console.log(countStudents([1,1,1,0,0,1],[1,0,0,0,1,1]))
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
const GetImportance = function (employees, id) {
  const employeeQueue = [employees[employees.findIndex(employee => employee.id === id)]]
  let acc = 0
  while (employeeQueue.length !== 0) {
    const nextEmployee = employeeQueue.shift()
    acc += nextEmployee.importance
    if (nextEmployee.subordinates.length > 0) {
      nextEmployee.subordinates.forEach(subordinate => {
        employeeQueue.push(employees[employees.findIndex(employee => employee.id === subordinate)])
      })
    }
  }
  return acc
}

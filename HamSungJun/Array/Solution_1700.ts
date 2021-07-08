function countStudents (students: number[], sandwiches: number[]): number {
  let numOneStudents = students.filter(std => std === 1).length
  while (students.length > 0) {
    if (numOneStudents === students.length && sandwiches[0] === 0) break
    if (numOneStudents === 0 && sandwiches[0] === 1) break
    if (students[0] === sandwiches[0]) {
      const whichStd = students.shift()
      sandwiches.shift()
      if (whichStd === 1) {
        numOneStudents -= 1
      }
    } else {
      students.push(students.shift() as number)
    }
  }
  return students.length
};

console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]))

const fs = require('fs');

function countStudents(filename) {
  const fieldCounts = {};

  try {
    /* Read the file */
    const data = fs.readFileSync(filename, 'utf-8');
    /* Split each line into an array of strings and remove empty lines */
    const rows = data.trim().split('\n').filter((row) => row !== '');

    const students = rows.slice(1).map((row) => row.split(','));
    const studentsCount = students.length;

    console.log(`Number of students: ${studentsCount}`);

    /* Iterate over each student and group by fields */
    students.forEach((student) => {
      const firstName = student[0]; // First name of the student
      const field = student[student.length - 1]; // Last field of the student

      if (!fieldCounts[field]) {
        fieldCounts[field] = [];
      }
      fieldCounts[field].push(firstName); // Store the first name in the field
    });

    /* Output the result */
    for (const field in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        const studentNames = fieldCounts[field];
        console.log(`Number of students in ${field}: ${studentNames.length}. List: ${studentNames.join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

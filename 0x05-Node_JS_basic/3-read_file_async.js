const fs = require('fs');

function countStudents(filename) {
  const fieldCounts = {};
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const rows = data.trim().split('\n').filter((row) => row !== '');
        const students = rows.slice(1).map((row) => row.split(','));
        const studentsCount = students.length;
        console.log(`Number of students: ${studentsCount}`);

        students.forEach((student) => {
          const firstName = student[0];
          const field = student[student.length - 1];
          if (!fieldCounts[field]) {
            fieldCounts[field] = [];
          }
          fieldCounts[field].push(firstName);
        });

        for (const field in fieldCounts) {
          if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
            const studentNames = fieldCounts[field];
            console.log(`Number of students in ${field}: ${studentNames.length}. List: ${studentNames.join(', ')}`);
          }
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;

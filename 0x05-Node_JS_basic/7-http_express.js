const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

async function readFileAsync(filename) {
  const fieldCounts = {};

  try {
    const data = await fs.readFile(filename, 'utf-8');
    const rows = data.trim().split('\n'); // Split by new lines and trim extra spaces

    const students = rows.slice(1); // All rows except the header
    const totalStudents = students.length;

    students.forEach((row) => {
      const studentDetails = row.split(',');
      const firstName = studentDetails[0]; // Assuming first name is the first field
      const field = studentDetails[studentDetails.length - 1]; // Field of study is the last field

      if (!fieldCounts[field]) {
        fieldCounts[field] = [];
      }
      fieldCounts[field].push(firstName);
    });

    let result = `Number of students: ${totalStudents}\n`;

    for (const field in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        const count = fieldCounts[field].length;
        const studentNames = fieldCounts[field].join(', ');
        result += `Number of students in ${field}: ${count}. List: ${studentNames}\n`;
      }
    }

    return result.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const studentData = await readFileAsync(process.argv[2]);
    res.send(`This is the list of our students\n${studentData}`);
  } catch (error) {
    res.status(500).send('Cannot load the database');
  }
});

app.listen(port, '127.0.0.1');

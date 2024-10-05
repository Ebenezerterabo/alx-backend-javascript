const http = require('http');
const readFileAsync = require('./3-read_file_async');

const database = process.argv[2];

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }

  if (req.url === '/students') {
    res.write('This is the list of our students');
    readFileAsync(database);
    res.end();
  }
}).listen(1245, '127.0.0.1');

module.exports = app;

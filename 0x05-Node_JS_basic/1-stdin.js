console.log('Welcome to Holberton School, what is your name?');
/* Executing it directly */
process.stdin.on('readable', () => {
  const data = process.stdin.read();
  if (data !== null) {
    process.stdout.write(`Your name is: ${data}`);
    process.exit();
  }
});
/* Check if the execution command is piped */
if (!process.stdin.isTTY) {
  process.on('exit', () => {
    console.log('This important software is now closing');
  });
}

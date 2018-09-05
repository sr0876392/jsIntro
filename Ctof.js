const readline = require('readline');

const x = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

x.question('Please enter temperature in C: ', (tempInput) => {
  console.log(`Entered temperature in Fahrenheit: ${tempInput * 9/5 + 32}`);
x.close();
});
const readline = require('readline');

const x = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

x.question('Please enter a number ', (y) => {
    for (i = 1; i <= 10; i++){
        console.log (y, "*", i, "=", y * i)
    }
x.close();
});
const chalk = require('chalk');

console.log(chalk.blue("Hello World!"));
console.log(chalk.green.bold("Success!"));
console.log(chalk.red.underline("Error message"));
//output: Hello World! (in blue), Success! (in green and bold), 
// Error message (in red and underlined)
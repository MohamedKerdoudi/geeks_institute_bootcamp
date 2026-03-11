
import { blue, green, red } from 'chalk';

function showColorfulMessage() {
  console.log(blue('This is a blue message!'));
  console.log(green('Success looks good in green!'));
  console.log(red.bold('Error messages stand out in red!'));
}

export default showColorfulMessage;
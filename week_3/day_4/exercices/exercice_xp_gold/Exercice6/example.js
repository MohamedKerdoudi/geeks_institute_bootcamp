const prompt = require('prompt-sync')();

function validateName() {
  const fullName = prompt('Enter your full name: ');

  const regex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;

  if (regex.test(fullName)) {
    console.log('Valid name ✅');
  } else {
    console.log('Invalid name ❌');
  }
}

validateName();
//output: Enter your full name: John Doe
// Valid name ✅
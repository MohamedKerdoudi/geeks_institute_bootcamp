//Daily challenge 1
function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    
    const allStrings = words.every(word => typeof word === "string");

    if (allStrings) {
      const uppercased = words.map(word => word.toUpperCase());
      resolve(uppercased);
    } else {
      reject("Error: Not all items are strings.");
    }
  });
}

function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (words.length > 4) {
      const sorted = words.sort();
      resolve(sorted);
    } else {
      reject("Error: Array length is not greater than 4.");
    }
  });
}
// Works
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then(arr => sortWords(arr))
  .then(result => console.log(result))
  .catch(error => console.log(error));

// Output:
// ["APPLE","BANANA","KIWI","MELON","PEAR"]
// Daily challenge 2
function toJs() {
  return new Promise((resolve, reject) => {
    const morseJS = JSON.parse(morse);

    if (Object.keys(morseJS).length === 0) {
      reject("Error: Morse object is empty.");
    } else {
      resolve(morseJS);
    }
  });
}
function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const userInput = prompt("Enter a word or sentence:").toLowerCase();
    const translation = [];

    for (let char of userInput) {
      if (morseJS[char]) {
        translation.push(morseJS[char]);
      } else {
        reject(`Error: Character "${char}" doesn't exist in Morse dictionary.`);
        return;
      }
    }

    resolve(translation);
  });
}
function joinWords(morseTranslation) {
  const output = morseTranslation.join("\n");
  
  const pre = document.createElement("pre");
  pre.textContent = output;
  document.body.appendChild(pre);
}

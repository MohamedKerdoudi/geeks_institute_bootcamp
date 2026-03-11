//Exercice 1
const API_URL = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(API_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {

    console.log("Full API Response:", data);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
//Exercice 2
const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

const URL = `https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=${API_KEY}`;

fetch(URL)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Full API Response:", data);
  })
  .catch(error => {
    console.error("Error fetching GIFs:", error);
  });
//Exercice 3
async function getStarship() {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log(data.result);

  } catch (error) {
    console.error("Error fetching starship:", error);
  }
}

getStarship();
//Exercice 4
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
//output:
// calling
// (after 2 seconds)
// resolved

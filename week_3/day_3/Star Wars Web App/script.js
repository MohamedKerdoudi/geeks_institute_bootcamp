
const btn = document.getElementById("btn");
const content = document.getElementById("content");
const card = document.getElementById("card");


async function getCharacter() {
  try {
    showLoading();


    const randomId = Math.floor(Math.random() * 83) + 1;


    const response = await fetch(`https://www.swapi.tech/api/people/${randomId}`);
    if (!response.ok) throw new Error("Character not found");

    const data = await response.json();
    const character = data.result.properties;


    const homeworldResponse = await fetch(character.homeworld);
    const homeworldData = await homeworldResponse.json();
    const homeworldName = homeworldData.result.properties.name;


    displayCharacter(character, homeworldName);

  } catch (error) {
    showError();
  }
}


function displayCharacter(character, homeworld) {
  content.innerHTML = `
    <h2>${character.name}</h2>
    <p>Height: ${character.height}</p>
    <p>Gender: ${character.gender}</p>
    <p>Birth Year: ${character.birth_year}</p>
    <p>Home World: ${homeworld}</p>
  `;
}


function showLoading() {
  content.innerHTML = `
    <div class="loading">
      <i class="fa-solid fa-spinner fa-spin"></i>
      <p>Loading...</p>
    </div>
  `;
}


function showError() {
  content.innerHTML = `
    <h2>Oh No! That person isn't available.</h2>
  `;
}


btn.addEventListener("click", getCharacter);
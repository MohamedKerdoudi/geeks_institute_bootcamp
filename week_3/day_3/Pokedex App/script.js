

const API_ROOT = 'https://pokeapi.co/api/v2/pokemon/';


const imgEl      = document.getElementById('pokemon-img');
const nameEl     = document.getElementById('pokemon-name');
const idEl       = document.getElementById('pokemon-id');
const heightEl   = document.getElementById('pokemon-height');
const weightEl   = document.getElementById('pokemon-weight');
const typeEl     = document.getElementById('pokemon-type');
const loadingEl  = document.getElementById('loading');
const errorEl    = document.getElementById('error');

const btnPrev    = document.getElementById('prev-btn');
const btnNext    = document.getElementById('next-btn');
const btnRandom  = document.getElementById('random-btn');


let currentId = null;              
function showLoading()  { loadingEl.classList.remove('hidden'); }
function hideLoading()  { loadingEl.classList.add('hidden');   }
function showError()    { errorEl.classList.remove('hidden'); }
function hideError()    { errorEl.classList.add('hidden');    }


function renderPokemon(data) {

  imgEl.src = data.sprites.front_default
           || data.sprites.other?.['official-artwork']?.front_default
           || '';

  nameEl.textContent   = data.name.charAt(0).toUpperCase() + data.name.slice(1);
  idEl.textContent     = `#${data.id}`;
  heightEl.textContent = `Height: ${data.height / 10} m`;   
  weightEl.textContent = `Weight: ${data.weight / 10} kg`;  

  const types = data.types.map(t => t.type.name).join(', ');
  typeEl.textContent   = `Type: ${types}`;


  currentId = data.id;
}


async function fetchPokemon(identifier) {
  try {
    hideError();
    showLoading();

    const response = await fetch(`${API_ROOT}${identifier}`);
    if (!response.ok) throw new Error('Not found');

    const data = await response.json();
    renderPokemon(data);
  } catch (err) {
    console.error(err);
    showError();
  } finally {
    hideLoading();
  }
}


async function fetchRandomPokemon() {
 
  const MAX_POKEMON = 1010;
  const randomId = Math.floor(Math.random() * MAX_POKEMON) + 1;
  await fetchPokemon(randomId);
}

async function fetchPreviousPokemon() {
  if (!currentId) return;                     
  const prevId = currentId - 1;
  if (prevId < 1) return;                   
  await fetchPokemon(prevId);
}

async function fetchNextPokemon() {
  if (!currentId) return;
  const nextId = currentId + 1;

  if (nextId > 1010) return;
  await fetchPokemon(nextId);
}


btnRandom.addEventListener('click', fetchRandomPokemon);
btnPrev.addEventListener('click', fetchPreviousPokemon);
btnNext.addEventListener('click', fetchNextPokemon);


fetchPokemon('ditto');   
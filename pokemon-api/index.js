console.log('linked?');
const pokemonList = document.getElementById('pokemon-list');
const refreshButton = document.getElementById('refresh-button');
// function to fetch all pokemon from our API
async function fetchPokemonData() {
  // fetch pokemon from api and store in variable
  const response = await fetch('http://localhost:3000/pokemon');

  // Convert the response to JSON
  const pokemonData = await response.json();

  // Locate the HTML element where we want to display the pokemon

  // Loop through the pokemon data and display each pokemon
  pokemonData.forEach((pokemon) => {
    // Create a list item for each pokemon
    const pokemonListItem = document.createElement('li');
    pokemonListItem.textContent = `${pokemon.name} - Type: ${pokemon.type}`;

    // Append the list item to the list
    pokemonList.appendChild(pokemonListItem);
  });
}

// // function to fetch a single pokemon from our API using ID
async function fetchSinglePokemonData(id) {
  // get a random id between 1 and 10( the number of pokemon in our list)
  const randomId = Math.floor(Math.random() * 10) + 1;

  // fetch pokemon from api using random id  and store in variable
  const response = await fetch(`http://localhost:3000/pokemon/${randomId}`);

  // Convert the response to JSON
  const pokemonData = await response.json();

  // create a list item to display the pokemon info
  const pokemonListItem = document.createElement('li');
  pokemonListItem.textContent = `ID: ${pokemonData.id}, Name: ${pokemonData.name}, Type: ${pokemonData.type}`;

  // clear previous pokemon info and display new pokemon info
  pokemonList.innerHTML = '';
  pokemonList.appendChild(pokemonListItem);

  // add an event listener to the refresh button
  refreshButton.addEventListener('click', () => {
    fetchSinglePokemonData(randomId);
  });
}
fetchSinglePokemonData();

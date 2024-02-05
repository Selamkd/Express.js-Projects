import express from 'express';

const app = express();

const pokemonList = [
  { id: 1, name: 'Bulbasaur', type: 'Grass/Poison' },
  { id: 2, name: 'Charmander', type: 'Fire' },
  { id: 3, name: 'Squirtle', type: 'Water' },
  { id: 4, name: 'Pikachu', type: 'Electric' },
  { id: 5, name: 'Jigglypuff', type: 'Normal/Fairy' },
  { id: 6, name: 'Psyduck', type: 'Water' },
  { id: 7, name: 'Meowth', type: 'Normal' },
  { id: 8, name: 'Snorlax', type: 'Normal' },
  { id: 9, name: 'Magikarp', type: 'Water' },
  { id: 10, name: 'Eevee', type: 'Normal' },
];

// get all pokemon
app.get('/pokemon', (req, res) => {
  res.json(pokemonList);
});

// get pokemon by id
app.get('/pokemon/:id', (req, res) => {
  const pokemonId = req.params.id;
  const pokemon = pokemonList.find(
    (pokemon) => pokemon.id === parseInt(pokemonId)
  );

  if (pokemon) {
    res.json(pokemon);
  } else {
    res.status(404).json({ error: 'Pokémon not found' });
  }
});

// specify port and start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

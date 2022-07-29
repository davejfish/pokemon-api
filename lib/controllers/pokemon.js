const { Router } = require('express');
const Pokemon = require('../models/pokemon');
const router = Router();


router
  .get('/:id', async (req, res) => {
    const pocketMonster = await Pokemon.getByID(req.params.id);
    res.json(pocketMonster);
  })
  .get('/', async (req, res) => {
    const pocketMonster = await Pokemon.getAll();
    const monsters = pocketMonster.map((monster) => ({ id: monster.id, name: monster.name }));
    res.json(monsters);
  })
  .get('/attacks/:id', async (req, res) => {
    const response = await Pokemon.getPokemonAttacks(req.params.id);
    const attacks = response.map(pokemon => pokemon.atk_name);
    const newPokemon = {
      name: response[0].name,
      attacks,
    };
    res.json(newPokemon);
  });

module.exports = router;

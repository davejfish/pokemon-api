const { Router } = require('express');
const Attacks = require('../models/attacks');
const router = Router();


router
  .get('/:id', async (req, res) => {
    const pocketMonster = await Attacks.getByID(req.params.id);
    res.json(pocketMonster);
  })
  .get('/', async (req, res) => {
    const pocketMonster = await Attacks.getAll();
    const monsters = pocketMonster.map((attack) => ({ id: attack.id, atk_name: attack.atk_name }));
    res.json(monsters);
  })
  .get('/pokemon-with-attack/:id', async (req, res) => {
    const attacks = await Attacks.getPokemonWithAttack(req.params.id);
    const pokemon = attacks.map(attack => attack.name);
    const result = {
      attack: attacks[0].atk_name,
      pokemon,
    };
    res.json(result);
  });

module.exports = router;

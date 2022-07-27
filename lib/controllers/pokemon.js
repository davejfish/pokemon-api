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
  });

module.exports = router;

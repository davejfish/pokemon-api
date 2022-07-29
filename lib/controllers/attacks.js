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
    const monsters = pocketMonster.map((attack) => ({ id: attack.id, name: attack.atk_name }));
    res.json(monsters);
  });

module.exports = router;

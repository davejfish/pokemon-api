const { Router } = require('express');

const router = Router();

const { cats } = require('../../data/cats');

router
  .get('/:id', (req, res) => {
    const cat = cats.find((cat) => cat.id === req.params.id);
    res.json(cat);
  })
  .get('/', (req, res) => {
    const newCats = cats.map((cat) => { 
      return { id: cat.id, name: cat.name };
    });
    res.json(newCats);
  });

module.exports = router;

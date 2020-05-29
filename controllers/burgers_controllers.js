
const router = require('express').Router();
const Burger = require('../models/burger.js');

// GET all burgers
router.get('/api/burgers', (req, res) => Burger
  .getBurgers(burgers => res.json(burgers)))

// GET all burgers
router.get('/api/burgers', (req, res) => {
    console.log('Yes')
});

// GET one burger
router.get('/burgers/:id', (req, res) => Burger
  .getBurgersWhere({ id: req.params.id }, burger => res.json(burger)))

// POST one burger
router.post('/burgers', (req, res) => Burger
  .addBurger(req.body, info => res.json(info)))

// PUT one burger
router.put('/burgers/:id', (req, res) => Burger
  .updateBurger(req.body, { id: req.params.id }, info => res.json(info)))

// DELETE one burger
router.delete('/burgers/:id', (req, res) => Burger
  .deleteBurger({ id: req.params.id }, info => res.json(info)))

module.exports = router;
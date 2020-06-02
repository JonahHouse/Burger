
const router = require('express').Router();
const Burger = require('../models/burger.js');

// GET all burgers
router.get('/api/burgers', (req, res) => Burger
  .getBurgers(burgers => res.json(burgers)))

// GET one burger
// Why is "id: req.params.id" in {}
router.get('/api/burgers/:id', (req, res) => Burger
  .getBurgersWhere({ id: req.params.id }, burger => res.json(burger)))

// POST one burger
router.post('/api/burgers', (req, res) => Burger
  .addBurger(req.body, info => res.json(info)))

// PUT one burger
router.put('/api/burgers/:id', (req, res) => Burger
  .updateBurger(req.body, { id: req.params.id }, info => res.json(info)))

// DELETE one burger
router.delete('/api/burgers/:id', (req, res) => Burger
  .deleteBurger({ id: req.params.id }, info => res.json(info)))

module.exports = router;
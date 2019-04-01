
const express = require('express');
const router = express.Router();
const create = require('../user-controllers/postNew');

router.post('/', (req, res, next) => {
      create(req.body)
      .then(result => res.json(result))
      .catch(err => next(err))
   });

module.exports = router;
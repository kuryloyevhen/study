
const express = require('express');
const router = express.Router();
const update = require('../user-controllers/putOne');

router.use('/:id', (req, res, next) => {
      update(req.body, req.params.id)
      .then( result => res.json(result) )
      .catch( err => next(err) )
   });

module.exports = router;
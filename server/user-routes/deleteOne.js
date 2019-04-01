
const express = require('express');
const router = express.Router();
const deleteOne = require('../user-controllers/deleteOne');

router.delete('/:id', (req, res, next) => {
      deleteOne(req.params.id)
      .then( result => res.json(result) )
      .catch( err => next(err) )
   });

module.exports = router;

const express = require('express');
const router = express.Router();
const getAll = require('../user-controllers/getAll');

router.get('/', (req, res, next) => {
      getAll()
      .then( result => res.json(result) )
      .catch( err => next(err) );
   });

module.exports = router;
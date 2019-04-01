
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
   if(req.session) { 
      req.session.destroy( err => {
         next(err);
      })
      res.end();
   } else res.end();
});

module.exports = router;

const express = require('express');
const router = express.Router();
const login = require('../user-controllers/login');

router.post('/', (req, res, next) => {
   login(req.body.name, req.body.password)
   .then(result => {
      if(result) {
         req.session.isLogin = 'true';
         if(result.dataValues.priveleges == 'admin') req.session.userRole = 'admin';
         else req.session.userRole = 'user';
         res.json(req.session);
      } else res.status(401).send('Unauthorized');
   })
   .catch( err => next(err) );
})

module.exports = router;
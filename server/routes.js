const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const user = require('./user');
const session = require('express-session');
const redis = require('redis');
const redisClient = redis.createClient();
const redisStore = require('connect-redis')(session);

const debug = require('debug')('stoneage:routers')

const redisOptions = {
   host: '127.0.0.1',
   port: 6379,
   client: redisClient
}

redisClient.on('connect', () => {
   console.log('Redis client conected');
})

const sessionOptions = {
   store: new redisStore(redisOptions),
   cookie: {
      httpOnly: false,
      secure: false
   },
   name: 'cookieID',
   secret: 'secret',
   saveUninitialized: true,
   resave: false,
}

app.use(session(sessionOptions))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use( (req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:4200');
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
   res.setHeader('Access-Control-Allow-Credentials', 'true');
   res.setHeader('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
   next();
})



app.post('/login', (req, res, next) => {
   user.login(req.body.name, req.body.password)
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

app.get('/logout', (req, res, next) => {
   if(req.session) { 
      req.session.destroy( err => {
         next(err);
      })
      res.end();
   } else res.end();
})

app.route('/users')
   .get((req, res, next) => {
      debug(req.session.id);
      debug('Here is session.id: %o', req.session);
      if(req.session.userRole == 'admin'){
         user.getAll()
         .then( result => res.json(result) )
         .catch( err => next(err) );
      } else res.status(403).send('Forbidden');
   })
   .post((req, res, next) => {
      if(req.session.userRole == 'admin'){
         user.create(req.body)
         .then(result => res.json(result))
         .catch(err => next(err))
      } else res.status(403).send('Forbidden'); 
   })

app.route('/users/:id')
   .delete( (req, res, next) => {
      if(req.session.userRole == 'admin'){
         user.destroy(req.params.id)
         .then( result => res.json(result) )
         .catch( err => next(err) )
      } else res.status(403).send('Forbidden');
      
   })
   .put( (req, res, next) => {
      if(req.session.userRole == 'admin') {
         user.update(req.body, req.params.id)
         .then( result => res.json(result) )
         .catch( err => next(err) )
      } else res.status(403).send('Forbidden');
      
   })

app.use(user.errorHandler);

module.exports = app;


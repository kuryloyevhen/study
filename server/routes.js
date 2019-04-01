const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const redis = require('redis');
const redisClient = redis.createClient();
const redisStore = require('connect-redis')(session);
const userGetAll = require('./user-routes/getAll');
const userPostNew = require('./user-routes/postNew');
const userDeleteOne = require('./user-routes/deleteOne');
const userPutOne = require('./user-routes/putOne');
const login = require('./user-routes/login');
const logout = require('./user-routes/logout');
const acceptCookies = require('./acceptCookies');
const errorHandler = require('./errorHandler');
const checkPermision = require('./checkPermission');

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
app.use(acceptCookies);


app.use('/login', login);
app.use('/logout', logout);
app.use('/users', [checkPermision], userGetAll);
app.use('/users', [checkPermision], userPostNew);
app.use('/users', [checkPermision], userDeleteOne);
app.use('/users', [checkPermision], userPutOne);


app.use(errorHandler);


module.exports = app;


const app = require('./routes');
const model = require('./sequelize');
const http = require('http');
const port = 3000;
const host = '127.0.0.1';
const server = http.createServer(app);


model.sequelize.sync()
   .then( () => {
      server.listen(port, host);
      server.on('error', onError);
      server.on('listening', onListening)
   })

function onError(err) {
   console.error('Error:', err);
}

function onListening() {
   console.log(`listening on port ${port}`);
}

const User = require('../User');

const findMatch = (name, password) => User.findOne({
   where: { 
      name,
      password
   }
});

module.exports = findMatch;
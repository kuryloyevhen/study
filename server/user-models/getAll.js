
const User = require('../User');

const findAll = (attr) => {
   if(attr) {
      return User.findAll({
         attributes: attr
      })
   } else {
         return User.findAll()
      }
};

module.exports = findAll;
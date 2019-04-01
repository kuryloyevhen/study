
const User = require('../User');

const destroyById = (id) => User.destroy({
   where: { id }
});

module.exports = destroyById;
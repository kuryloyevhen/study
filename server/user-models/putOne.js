
const User = require('../User');

const update = (body, id) => 
  User.update(
   { password: body.password },
   { where: { id } }
);

module.exports = update;
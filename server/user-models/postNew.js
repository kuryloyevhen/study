
const User = require('../User');

const build = (body) => User.build({
   id: body.id,
   name: body.name,
   password: body.password,
   email: body.email,
   priveleges: body.priveleges
});

module.exports = build;
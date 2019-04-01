
const build = require('../user-models/postNew');
const getAll = require('../user-models/getAll');

const create = (body) => {
   let newUser = build(body);
   return newUser.save()
      .then( () => getAll() )
}

module.exports = create;
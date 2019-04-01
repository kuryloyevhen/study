
const getAll = require('../user-models/getAll');
const update = require('../user-models/putOne');

const put = (body, id) => 
  update(body, id)
      .then( () => getAll());

module.exports = put;

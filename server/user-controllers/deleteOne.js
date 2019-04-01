
const deleteById = require('../user-models/deleteOne');
const getAll = require('../user-models/getAll');

const del = (id) => 
   deleteById(id)
      .then( () => getAll() );

module.exports = del;
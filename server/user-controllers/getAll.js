const findAll = require('../user-models/getAll');

const getAll = (attr) => findAll(attr);


module.exports = getAll;
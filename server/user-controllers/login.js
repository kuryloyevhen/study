
const findMatch = require('../user-models/findMatch');

const login = async (name, password) => { 
   let user = await findMatch(name, password);
   if(user) return user;
   else return false;
}

module.exports = login;
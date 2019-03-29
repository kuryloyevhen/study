
const model = require('./model');


const getAll = (attr) => model.findAll(attr);

const login = async (name, password) => { 
   let user = await model.findMatch(name, password);
   if(user) return user;
   else return false;
}

const create = (body) => {
   let newUser = model.build(body);
   return newUser.save()
      .then( () => model.findAll() )
}


const destroy = (id) => 
   model.destroyById(id)
      .then( () => model.findAll() );



const update = (body, id) => 
  model.update(body, id)
      .then( () => model.findAll());


 const errorHandler = (err, req, res, next) => {
    res.status(500).send(err);
 }

 const userManager = {
   getAll,
   create,
   destroy,
   update,
   errorHandler,
   login
 }

module.exports = userManager;
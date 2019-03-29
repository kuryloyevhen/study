
const Sequelize = require('sequelize');
const sequelize = new Sequelize('testing', 'admin', '12345', {
   host: '127.0.0.1',
   dialect: 'postgres'
})


const User = sequelize.define('user', {
   id: {
      type: Sequelize.INTEGER,
      primaryKey: true
   },
   name: {
      type: Sequelize.STRING
   },
   password: {
      type: Sequelize.STRING
   },
   email: {
      type: Sequelize.STRING
   },
   priveleges: {
      type: Sequelize.STRING
   }
}, {
   timestamps: false
});

sequelize.authenticate()
   .then( () => {
      console.log('Connection is OK')
   })
   .catch( err => {
      console.error('Connection isn\'t OK', err)
   });

const findMatch = (name, password) => User.findOne({
   where: { 
      name,
      password
   }
});

const findAll = (attr) => {
   if(attr) {
      return User.findAll({
         attributes: attr
      })
   } else {
         return User.findAll()
      }
};

const build = (body) => User.build({
   id: body.id,
   name: body.name,
   password: body.password,
   email: body.email,
   priveleges: body.priveleges
});

const destroyById = (id) => User.destroy({
   where: { id }
});
 
const update = (body, id) => 
  User.update(
   { password: body.password },
   { where: { id } }
);

const userModel = {
   sequelize,
   findAll,
   build,
   destroyById,
   update,
   findMatch
}

module.exports = userModel;
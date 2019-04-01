
const db = require('./sequelize');

const User = db.sequelize.define('user', {
   id: {
      type: db.Sequelize.INTEGER,
      primaryKey: true
   },
   name: {
      type: db.Sequelize.STRING
   },
   password: {
      type: db.Sequelize.STRING
   },
   email: {
      type: db.Sequelize.STRING
   },
   priveleges: {
      type: db.Sequelize.STRING
   }
}, {
   timestamps: false
});

module.exports = User;
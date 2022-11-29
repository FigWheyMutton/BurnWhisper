const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {}

// var user = sequelize.define('users', {
//     id: {
//         type: Sequelize.INTEGER,
//         unique: true,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     username: {
//         type: Sequelize.STRING,
//         unique: true,
//         allowNull: false
//     },
//     password: {
//         type: Sequelize.STRING,
//         allowNull: false
//     }
// });

// User.beforeCreate((user, options)  => {
//     const salt = bcrypt.genSaltSync();
//     user.password = bcrypt.hashSync(user.password, salt);
// });

// User.prototype.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
// };

// sequelize.sync()
//     .then(() => console.log('user tables has been sucesssful craeted'))
//     .catch(error => console.log('error has occured'));

//     module.exports = User;

User.init(
    {
      // define an id column
      id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },
      // define a username column
      username: {
          type: DataTypes.STRING,
          allowNull:false
      },
      // define an email column 
      email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
              isEmail: true
          }
      },
      // define a password column 
      password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [4]
          }
      },
      // define a bio column
      bio: {
          type: DataTypes.TEXT,
          allowNull: true,
      }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
      }
    );
    
    module.exports = User;

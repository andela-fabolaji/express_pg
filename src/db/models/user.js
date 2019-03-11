'use strict';
const { hash } = require('../../utils/bcrypt');
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email format.'
        }
      }
    },
    password: DataTypes.STRING,
    roleId: {
      type: DataTypes.INTEGER,
      validate: {
        isIn: {
          args: [[2, 3]]
        }
      }
    }
  }, { tableName: 'users' });
  
  user.associate = function(models) {
    this.belongsTo(models.Role, { foreignKey: 'roleId', constraint: false });
    this.hasMany(models.Meal, { foreignKey: 'catererId', constraint: false });
    this.hasMany(models.Order, { foreignKey: 'userId', constraint: false });
  };

  user.addHook('beforeCreate', 'beforeUpdate', (user, options) => {
    console.log(user);
    if (user.password.length) {
      user.password = hash(user.password);
    }
  });

  return user;
};
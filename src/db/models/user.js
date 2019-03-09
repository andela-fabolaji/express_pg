'use strict';
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
    role: {
      type: DataTypes.STRING,
      defaultValue: 'caterer'
    }
  }, { tableName: 'users' });
  
  user.associate = function(models) {
    this.hasMany(models.Meal, { foreignKey: 'catererId', constraint: false });
  };

  return user;
};
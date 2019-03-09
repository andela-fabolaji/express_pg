'use strict';
module.exports = (sequelize, DataTypes) => {
  const meal = sequelize.define('Meal', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    catererId: DataTypes.INTEGER
  }, { tableName: 'meals' });

  meal.associate = function(models) {
    this.belongsTo(models.User, { foreignKey: 'catererId' });
  };

  return meal;
};
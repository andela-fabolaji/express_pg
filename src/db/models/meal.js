'use strict';
module.exports = (sequelize, DataTypes) => {
  const meal = sequelize.define('Meal', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    publish: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }
  }, { tableName: 'meals' });

  meal.associate = function(models) {
    this.belongsTo(models.User, { foreignKey: 'catererId', constraint: false });
    this.belongsToMany(models.Order, { through: 'MealOrder', foreignKey: 'mealId' });
  };

  return meal;
};
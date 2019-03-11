'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('Order', {
    quantity: {
      type: DataTypes.INTEGER
    },
    fulfilled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, { tableName: 'orders' });
  order.associate = function(models) {
    this.belongsTo(models.User, { foreignKey: 'userId' });
    this.belongsToMany(models.Meal, { through: 'MealOrder', foreignKey: 'orderId' });
  };
  return order;
};
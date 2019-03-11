'use strict';
module.exports = (sequelize, DataTypes) => {
  const mealorder = sequelize.define('mealorder', {}, {});
  return mealorder;
};
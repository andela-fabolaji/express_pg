'use strict';
module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define('Role', {
    title: DataTypes.STRING,
    permissions: DataTypes.ARRAY(DataTypes.STRING)
  }, { tableName: 'roles' });
  role.associate = function(models) {
    this.hasMany(models.User, { foreignKey: 'roleId' });
  };
  return role;
};
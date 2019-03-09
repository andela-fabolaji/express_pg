'use strict';
module.exports = (sequelize, DataTypes) => {
  const Document = sequelize.define('Document', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    ownerId: DataTypes.INTEGER,
    accessLevel: DataTypes.STRING
  }, { tableName: 'documents' });
  Document.associate = function(models) {
    // associations can be defined here
    this.belongsTo(models.User, { foreignKey: 'ownerId', constraint: false })
  };
  return Document;
};
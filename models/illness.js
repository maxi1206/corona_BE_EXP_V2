'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class illness extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.User, {through: 'UserIllness'})
    }
  }
  illness.init({
    displayName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'illness',
  });
  return illness;
};
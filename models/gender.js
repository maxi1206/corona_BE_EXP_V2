'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gender extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      console.log(models)
      // define association here
      this.hasMany(models.User);
    }
  }
  gender.init({
    displayName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'gender',
  });
  return gender;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sideeffect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.appointment, {through: 'AppointmentSideeffect'});
    }
  }
  sideeffect.init({
    displayName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sideeffect',
  });
  return sideeffect;
};
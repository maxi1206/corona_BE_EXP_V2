'use strict';
const {
  Model, UUID
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      console.log(models);
      // define association here
      this.belongsTo(models.gender);
      this.hasMany(models.appointment);
      this.belongsTo(models.priority);
      this.belongsTo(models.role);
      this.belongsToMany(models.illness, {through: 'UserIllness'});
    }

    //Everytime you return a User gets returned in an API Respones you can define wich fields are returned
    toJSON() {
      return {...this.get(), id: undefined};
    }
  }

  user.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    telNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return user;
};
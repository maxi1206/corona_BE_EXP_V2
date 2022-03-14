'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('priorities', [{
      displayName: 'Gruppe - 1'
    },
      {
        displayName: 'Gruppe - 2'
      },
      {
        displayName: 'Gruppe - 3'
      },
      {
        displayName: 'Gruppe - 4'
      }]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

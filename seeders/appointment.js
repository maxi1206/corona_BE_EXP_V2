'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */


    await queryInterface.bulkInsert('appointments', [{
      date: '2017-06-15',
      location: 'Impfzentrum Süd'
    },
      {
        date: '2017-06-15',
        location: 'Impfzentrum Süd'
      }]);

    await queryInterface.bulkInsert('vaccines', [{
      displayName: 'Biontech'
    },
      {
        displayName: 'Moderna'
      },
      {
        displayName: 'Astra Zeneca'
      }]);

    await queryInterface.bulkInsert('sideeffects', [{
      displayName: 'Kopfschmerzen'
    },
      {
        displayName: 'Übelkeit'
      },
      {
        displayName: 'Grippesymptome'
      }]);

    await queryInterface.bulkInsert('genders', [{
      displayName: 'männlich'
    },
      {
        displayName: 'weiblich'
      }]);

    await queryInterface.bulkInsert('illnesses', [{
      displayName: 'Krebs'
    },
      {
        displayName: 'Asthma'
      }]);

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

    await queryInterface.bulkInsert('roles', [{
      displayName: 'Admin'
    },
      {
        displayName: 'User'
      }]);

    await queryInterface.bulkInsert('users', [{
      firstName: 'Hans',
      lastName: 'Franz',
      email: 'geiler.typ@gmail.com',
      password: '1234',
      telNumber: '235346-346346',
      genderId: 1,
      priorityId: 1,
      roleId: 1
    },
      {
        firstName: 'Hans',
        lastName: 'Franz',
        email: 'geiler.typ@gmai.com',
        password: '1234',
        telNumber: '235346-346346',
        genderId: 1,
        priorityId: 1,
        roleId: 1
      },
      {
        firstName: 'Hans',
        lastName: 'Franz',
        email: 'geiler.typ@gil.com',
        password: '1234',
        telNumber: '235346-346346',
        genderId: 1,
        priorityId: 1,
        roleId: 1
      }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
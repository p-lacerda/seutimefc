'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('clubs', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      clubName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'club_name',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('clubs');
  }
};

'use strict';

const { hashPass } = require('../helpers/bcyrpt');
module.exports = {
  async up (queryInterface, Sequelize) {
    let data = require('../data/user.json')
    data.forEach(e =>{
      e.password = hashPass(e.password)
      e.createdAt = new Date()
      e.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('Users',data,{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};

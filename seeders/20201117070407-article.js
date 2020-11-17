'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articles', [{
      title: "文章一",
      content: "展会上接口设计刷卡机",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "文章二",
      content: "撒大撒发射点",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Articles',null,{})
  }
};

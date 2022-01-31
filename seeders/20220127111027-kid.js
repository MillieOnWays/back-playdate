"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "kids",
      [
        {
          name: "jonny test",
          birthDate: "2019-01-02",
          gender: "m",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          name: "Bibi test2",
          birthDate: "2017-07-16",
          gender: "f",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          name: "Sisi test3",
          birthDate: "2017-07-16",
          gender: "f",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          name: "Lili test4",
          birthDate: "2018-07-16",
          gender: "f",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("kids", null, {});
  },
};

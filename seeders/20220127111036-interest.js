"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "interests",
      [
        {
          name: "football",
          createdAt: new Date(),
          updatedAt: new Date(),
          kidId: 1,
        },

        {
          name: "horses",
          createdAt: new Date(),
          updatedAt: new Date(),
          kidId: 2,
        },

        {
          name: "music",
          createdAt: new Date(),
          updatedAt: new Date(),
          kidId: 3,
        },
      ],
      {}
    );
  },
};

down: async (queryInterface, Sequelize) => {
  await queryInterface.bulkDelete("interests", null, {});
};

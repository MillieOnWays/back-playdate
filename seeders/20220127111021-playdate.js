"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "playdates",
      [
        {
          name: "Go to the cinema",
          date: "2022-02-07",
          startTime: new Date(),
          endTime: new Date(),
          description: "Let's go to Pathe, Dora the explorer",
          city: "Amsterdam",
          address: "Codaisseurstraat 8",
          tag: "cinema",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          name: "Horse riding",
          date: "2022-03-01",
          startTime: new Date(),
          endTime: new Date(),
          description: "Let's go to the farm, Dora the horse rider",
          city: "Almere",
          address: "Almerestraat 19",
          tag: "horses",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("playdates", null, {});
  },
};

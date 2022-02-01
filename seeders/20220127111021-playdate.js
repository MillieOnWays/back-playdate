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
          description:
            "We are planning to go to cinema on 7th Feb 2022. We would love if some of you guys can join us with your kids. Let's go to Pathe, Dora the explorer. We can meet at Pathe at 11.00 am",
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
          description:
            "Let's go to the farm, There kids can spend time with farm animals and nature as well. It will be very good opportunity for kids to explore the nature. So please join us on 1st March, 2022. We can start at 15.00. Let's have fun together.",
          city: "Almere",
          address: "Almerestraat 19",
          tag: "farm",
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

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      const table = await queryInterface.describeTable("Users");
      if (table && table.image) {
        return queryInterface.changeColumn("Users", "image", {
          type: Sequelize.BLOB("long"),
          // type: Sequelize.BYTEA,
          allowNull: true,
        });
      } else {
        console.log("Table or column does not exist");
        return Promise.resolve();
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      const table = await queryInterface.describeTable("Users");
      if (table && table.image) {
        return queryInterface.changeColumn("Users", "image", {
          // type: Sequelize.STRING,
          type: Sequelize.TEXT,
          allowNull: true,
        });
      } else {
        console.log("Table or column does not exist");
        return Promise.resolve();
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

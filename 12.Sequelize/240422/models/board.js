const Sequelize = require("sequelize");

module.exports = class Board extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        content: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Board",
        tableName: "board",
        underscored: true,
      }
    );
  }
  static associate(db) {
    db.Board.belongsTo(db.User, {
      targetKey: "userId",
      foreignKey: "userId",
    });
    db.Board.hasMany(db.User, {});
  }
};

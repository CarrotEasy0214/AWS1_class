const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: Sequelize.STRING(50),
          allowNull: false,
          unique: true,
        },
        name: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING(64),
          allowNull: false,
        },
        age: {
          type: Sequelize.TINYINT.UNSIGNED,
        },
      },
      {
        sequelize,
        modelName: "User",
        tableName: "user",
        underscored: true,
        // sourceKey: "userId", //varchar로 바뀜
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Board, {
      //hasOne, hasMany
      sourceKey: "userId",
      foreignKey: "userId",
      onDelete: "casecade",
    });
    db.User.hasMany(db.Board, {});

    // N : M

    db.User.belongsToMany(db.User, {
      through: "follow",
      foreignKey: "follower", // 각각의 컬럼키
      as: "follower", //시퀄라이즈가 사용하는 별명
    });
    db.User.belongsToMany(db.User, {
      through: "follow",
      foreignKey: "following",
      as: "following",
      // sourceKey: "userId",
    });
  }
};

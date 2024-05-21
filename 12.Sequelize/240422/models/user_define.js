const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "User",
    {
      userId: {
        // field:"user_id", // column명을 지정할 수 있다.
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },
      name: {
        type: Sequelize.STRING(10),
        allowNull: false, //default: true 기본값은 트루이다.
      },
      password: {
        type: Sequelize.STRING(64),
        allowNull: false, //default: true 기본값은 트루이다.
      },
      age: {
        type: Sequelize.TINYINT.UNSIGNED,
      },
    },
    {
      modelName: "User", // 시퀄라이즈가 이해라는 테이블 이름(모델명)
      tableName: "user", // DB에서의 테이블 이름
      underscored: true,
      //   createdAt: false, // 디폴트값이 트루
      //   updatedAt: false, // 디폴트값이 트루
      paranoid: true, // 삭제시 완전 삭제가 아닌 deleted_at을 통해서 확인한다.
    }
  );
};

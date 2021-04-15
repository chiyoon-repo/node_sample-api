const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('User', {
        id: {
            type: Sequelize.BIGINT(11),
            // If you dont't define a primaryKey then sequelize usesid by default.
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING(50),
            allowNull: true,
            unique: false
        }
    }, {tableName: "user", timestamps: false})
    // don't add the timestamp attributes(updatedAt, createdAt)

    return User;
}

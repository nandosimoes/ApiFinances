const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Admin extends Model {}

Admin.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Admin',
    tableName: 'admins',
    timestamps: true,
});

module.exports = Admin;
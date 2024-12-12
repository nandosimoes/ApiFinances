const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Notification extends Model {}

Notification.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    clientId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'clients',
            key: 'id',
        },
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Notification',
    tableName: 'notifications',
    timestamps: true,
});

module.exports = Notification;
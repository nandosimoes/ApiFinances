const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Client = require('./Client');

const Account = sequelize.define('Account', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    clientId: {
        type: DataTypes.INTEGER,
        references: {
            model: Client,
            key: 'id',
        },
        allowNull: false,
    },
    balance: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
    },
}, { timestamps: true });

Account.belongsTo(Client, { foreignKey: 'clientId' });

module.exports = Account;
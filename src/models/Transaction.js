const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Account = require('./Account');

const Transaction = sequelize.define('Transaction', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    accountId: {
        type: DataTypes.INTEGER,
        references: {
            model: Account,
            key: 'id',
        },
        allowNull: false,
    },
    accountType: {
        type: DataTypes.ENUM('Corrente', 'Poupança', 'Salário', 'Mista', 'Digital', 'Universitária', 'Conjunta', 'Solidária'),
        allowNull: false,
    },
    transactionType: {
        type: DataTypes.ENUM('Crédito', 'Débito'),
        allowNull: false,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    transactionDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, { timestamps: true });

Transaction.belongsTo(Account, { foreignKey: 'accountId' });

module.exports = Transaction;
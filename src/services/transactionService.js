const Transaction = require('../models/Transaction');
const Account = require('../models/Account');

const transactionService = {
    async createTransaction(data) {
        const account = await Account.findByPk(data.accountId);
        if (!account) {
            throw new Error('Conta não encontrada.');
        }
        return await Transaction.create(data);
    },

    async getAllTransactions() {
        return await Transaction.findAll();
    },

    async getTransactionById(id) {
        return await Transaction.findByPk(id);
    },

    async deleteTransaction(id) {
        const transaction = await Transaction.findByPk(id);
        if (transaction) {
            await transaction.destroy();
            return true;
        }
        return false;
    },
};

module.exports = transactionService;
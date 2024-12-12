const Account = require('../models/Account');
const Client = require('../models/Client');

const accountService = {
    async createAccount(data) {
        const client = await Client.findByPk(data.clientId);
        if (!client) {
            throw new Error('Cliente não encontrado.');
        }
        return await Account.create(data);
    },

    async getAllAccounts() {
        return await Account.findAll();
    },

    async getAccountById(id) {
        return await Account.findByPk(id);
    },

    async updateAccount(id, data) {
        const account = await Account.findByPk(id);
        if (account) {
            return await account.update(data);
        }
        return null;
    },

    async deleteAccount(id) {
        const account = await Account.findByPk(id);
        if (account) {
            await account.destroy();
            return true;
        }
        return false;
    },
};

module.exports = accountService;
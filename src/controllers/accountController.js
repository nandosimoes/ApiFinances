const Account = require('../models/Account');
const Client = require('../models/Client');

const accountController = {
    createAccount: async (req, res) => {
        const { clientId, balance } = req.body;

        try {
            const client = await Client.findByPk(clientId);
            if (!client) {
                return res.status(404).json({ message: 'Cliente não encontrado.' });
            }
            const newAccount = await Account.create({ clientId, balance });
            res.status(201).json(newAccount);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar conta.', error });
        }
    },

    getAllAccounts: async (req, res) => {
        try {
            const accounts = await Account.findAll();
            res.json(accounts);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar contas.', error });
        }
    },

    getAccountById: async (req, res) => {
        const { id } = req.params;

        try {
            const account = await Account.findByPk(id);
            if (!account) {
                return res.status(404).json({ message: 'Conta não encontrada.' });
            }
            res.json(account);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar conta.', error });
        }
    },

    updateAccount: async (req, res) => {
        const { id } = req.params;
        const { balance } = req.body;

        try {
            const account = await Account.findByPk(id);
            if (!account) {
                return res.status(404).json({ message: 'Conta não encontrada.' });
            }

            account.balance = balance;
            await account.save();

            res.json(account);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar conta.', error });
        }
    },

    deleteAccount: async (req, res) => {
        const { id } = req.params;

        try {
            const account = await Account.findByPk(id);
            if (!account) {
                return res.status(404).json({ message: 'Conta não encontrada.' });
            }

            await account.destroy();
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Erro ao deletar conta.', error });
        }
    },
};

module.exports = accountController;
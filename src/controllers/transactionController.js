const Transaction = require('../models/Transaction');
const Account = require('../models/Account');

const transactionController = {
    createTransaction: async (req, res) => {
        const { accountId, accountType, transactionType, amount } = req.body;

        try {
            const account = await Account.findByPk(accountId);
            if (!account) {
                return res.status(404).json({ message: 'Conta não encontrada.' });
            }

            const newTransaction = await Transaction.create({ accountId, accountType, transactionType, amount });
            res.status(201).json(newTransaction);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar transação.', error });
        }
    },

    getAllTransactions: async (req, res) => {
        try {
            const transactions = await Transaction.findAll();
            res.json(transactions);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar transações.', error });
        }
    },

    getTransactionById: async (req, res) => {
        const { id } = req.params;

        try {
            const transaction = await Transaction.findByPk(id);
            if (!transaction) {
                return res.status(404).json({ message: 'Transação não encontrada.' });
            }
            res.json(transaction);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar transação.', error });
        }
    },

    deleteTransaction: async (req, res) => {
        const { id } = req.params;

        try {
            const transaction = await Transaction.findByPk(id);
            if (!transaction) {
                return res.status(404).json({ message: 'Transação não encontrada.' });
            }

            await transaction.destroy();
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Erro ao deletar transação.', error });
        }
    },
};

module.exports = transactionController;
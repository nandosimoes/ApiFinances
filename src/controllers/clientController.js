const Client = require('../models/Client');

const clientController = {
    createClient: async (req, res) => {
        const { name, email } = req.body;

        try {
            const newClient = await Client.create({ name, email });
            res.status(201).json(newClient);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar cliente.', error });
        }
    },

    getAllClients: async (req, res) => {
        try {
            const clients = await Client.findAll();
            res.json(clients);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar clientes.', error });
        }
    },

    getClientById: async (req, res) => {
        const { id } = req.params;

        try {
            const client = await Client.findByPk(id);
            if (!client) {
                return res.status(404).json({ message: 'Cliente não encontrado.' });
            }
            res.json(client);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar cliente.', error });
        }
    },

    updateClient: async (req, res) => {
        const { id } = req.params;
        const { name, email } = req.body;

        try {
            const client = await Client.findByPk(id);
            if (!client) {
                return res.status(404).json({ message: 'Cliente não encontrado.' });
            }

            client.name = name;
            client.email = email;
            await client.save();

            res.json(client);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar cliente.', error });
        }
    },

    deleteClient: async (req, res) => {
        const { id } = req.params;

        try {
            const client = await Client.findByPk(id);
            if (!client) {
                return res.status(404).json({ message: 'Cliente não encontrado.' });
            }

            await client.destroy();
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Erro ao deletar cliente.', error });
        }
    },
};

module.exports = clientController;
const Client = require('../models/Client');

const clientService = {
    async createClient(data) {
        return await Client.create(data);
    },

    async getAllClients() {
        return await Client.findAll();
    },

    async getClientById(id) {
        return await Client.findByPk(id);
    },

    async updateClient(id, data) {
        const client = await Client.findByPk(id);
        if (client) {
            return await client.update(data);
        }
        return null;
    },

    async deleteClient(id) {
        const client = await Client.findByPk(id);
        if (client) {
            await client.destroy();
            return true;
        }
        return false;
    },
};

module.exports = clientService;
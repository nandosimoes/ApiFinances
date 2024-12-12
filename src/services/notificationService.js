const Notification = require('../models/Notification');
const Client = require('../models/Client');

const notificationService = {
    async createNotification(data) {
        const client = await Client.findByPk(data.clientId);
        if (!client) {
            throw new Error('Cliente não encontrado.');
        }
        return await Notification.create(data);
    },

    async getAllNotifications() {
        return await Notification.findAll();
    },

    async getNotificationById(id) {
        return await Notification.findByPk(id);
    },

    async deleteNotification(id) {
        const notification = await Notification.findByPk(id);
        if (notification) {
            await notification.destroy();
            return true;
        }
        return false;
    },
};

module.exports = notificationService;
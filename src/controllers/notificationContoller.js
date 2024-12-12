const Notification = require('../models/Notification');
const Client = require('../models/Client');

const notificationController = {
    createNotification: async (req, res) => {
        const { clientId, message } = req.body;

        try {
            const client = await Client.findByPk(clientId);
            if (!client) {
                return res.status(404).json({ message: 'Cliente não encontrado.' });
            }

            const newNotification = await Notification.create({ clientId, message });
            res.status(201). json(newNotification);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar notificação.', error });
        }
    },

    getAllNotifications: async (req, res) => {
        try {
            const notifications = await Notification.findAll();
            res.json(notifications);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar notificações.', error });
        }
    },

    getNotificationById: async (req, res) => {
        const { id } = req.params;

        try {
            const notification = await Notification.findByPk(id);
            if (!notification) {
                return res.status(404).json({ message: 'Notificação não encontrada.' });
            }
            res.json(notification);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar notificação.', error });
        }
    },

    deleteNotification: async (req, res) => {
        const { id } = req.params;

        try {
            const notification = await Notification.findByPk(id);
            if (!notification) {
                return res.status(404).json({ message: 'Notificação não encontrada.' });
            }

            await notification.destroy();
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Erro ao deletar notificação.', error });
        }
    },
};

module.exports = notificationController;
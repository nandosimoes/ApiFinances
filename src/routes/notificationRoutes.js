const express = require('express');
const notificationController = require('../controllers/notificationContoller');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, notificationController.createNotification); 
router.get('/', authMiddleware, notificationController.getAllNotifications); 
router.get('/:id', authMiddleware, notificationController.getNotificationById); 
router.delete('/:id', authMiddleware, notificationController.deleteNotification);

module.exports = router;
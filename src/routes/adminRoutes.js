const express = require('express');
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/login', adminController.login);
router.get('/', authMiddleware, adminController.getAllAdmins);

module.exports = router;
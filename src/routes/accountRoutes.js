const express = require('express');
const accountController = require('../controllers/accountController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, accountController.createAccount); 
router.get('/', authMiddleware, accountController.getAllAccounts);
router.get('/:id', authMiddleware, accountController.getAccountById); 
router.put('/:id', authMiddleware, accountController.updateAccount);
router.delete('/:id', authMiddleware, accountController.deleteAccount); 

module.exports = router;
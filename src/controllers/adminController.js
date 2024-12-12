const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const adminController = {
    login: async (req, res) => {
        const { email, senha } = req.body;

        try {
            const admin = await Admin.findOne({ where: { email } });
            if (!admin) {
                return res.status(404).json({ message: 'Administrador não encontrado.' });
            }

            const isPasswordValid = await bcrypt.compare(senha, admin.senha);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Senha inválida.' });
            }

            const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao autenticar administrador.', error });
        }
    },

    getAllAdmins: async (req, res) => {
        try {
            const admins = await Admin.findAll();
            res.json(admins);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar administradores.', error });
        }
    },
};

module.exports = adminController;
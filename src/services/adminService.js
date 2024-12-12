const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');

const adminService = {
    async createAdmin(data) {
        const hashedPassword = await bcrypt.hash(data.senha, 10);
        return await Admin.create({ ...data, senha: hashedPassword });
    },

    async findAdminByEmail(email) {
        return await Admin.findOne({ where: { email } });
    },

    async getAllAdmins() {
        return await Admin.findAll();
    },
};

module.exports = adminService;
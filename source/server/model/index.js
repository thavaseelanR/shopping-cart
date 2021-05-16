const mongoose = require('mongoose');

const adminLoginUserSchema = require('./admin-login/index');

// const amazonProjectDB = mongoose.connection.useDb('amazon_project');
const AdminLogin = mongoose.model('admin_login_user', adminLoginUserSchema);

module.exports = {
    AdminLogin
};


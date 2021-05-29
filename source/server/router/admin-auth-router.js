//admin-auth-router
const adminLoginUser = require('../admin-controller/admin-login/index');
const adminUserRegister = require('../admin-controller/admin-register/index');

//admin-user-list
const adminUserList = require('../admin-controller/admin-user-list')
module.exports = function (app) {
    //admin-auth-router
    app.post('/admin-login', adminLoginUser);
    app.post('/admin-register', adminUserRegister);

    //admin-user-list
    app.post('/get-admin-user-list', adminUserList)
}


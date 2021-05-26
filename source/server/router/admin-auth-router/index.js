const { v4: uuidv4 } = require('uuid');
const md5 = require('md5');


const adminLoginUser = require('../../controller/admin-login/index');
const adminUserRegister = require('../../controller/admin-register/index');

module.exports = (app) => {
    
    app.post('/admin-login', adminLoginUser);
    app.post('/admin-register', adminUserRegister);
}
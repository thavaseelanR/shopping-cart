const { AdminLogin } = require('../../model/index');
const md5 = require('md5');

async function adminUserRegister(adminFirstName, adminLastName, adminUserName, password, adminRole, date, active) {
    try {
        const hashPassword = md5(password);
        const getAllAdminRegisterUser = await AdminLogin.find({ adminUserName: adminUserName }).count({});
        if (getAllAdminRegisterUser == 0) {
            const adminRegisterUser = await AdminLogin({
                adminFirstName, adminLastName,
                adminUserName, adminPassword: hashPassword, adminRole, date, active
            })
            adminRegisterUser.save();
            return { message: 'successfully register' };
        }
        else {
            return { message: 'User Alltrady Register' };
        }
    }
    catch (e) {
        console.log(e)
    }
}

module.exports = adminUserRegister;
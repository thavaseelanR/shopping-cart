const { v4: uuidv4 } = require('uuid');
const md5 = require('md5');
const { AdminLogin } = require('../../model/index');

async function adminLoginUser(userName, password) {
    try {
        const hashPassword = md5(password);
        const isDeleteUser = false;
        await AdminLogin({
            adminUserName: "Satj",
            adminPassword: "asdasd",
            isDeleteUser: false
        }).save()
        const checkUserInDb = await AdminLogin.find();
        const c = 4;
        if (userName) {
            const checkUserInDb = await AdminLogin.find({userName:userName}).count();
            if (checkUserInDb == 1) {

            } else {
                return 'user Not Login'
            }
        }
    }
    catch (e) {
        console.log(e);
    }
}

module.exports = adminLoginUser;
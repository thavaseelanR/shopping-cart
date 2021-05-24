const { v4: uuidv4 } = require('uuid');
const md5 = require('md5');
const { AdminLogin } = require('../../model/index');

async function adminLoginUser(userName, password) {
    try {
        const hashPassword = md5(password);
        const isDeleteUser = false;
 
        if (userName) {
            const checkUserInDb = await AdminLogin.find();
            if (checkUserInDb[0].adminUserName == userName && checkUserInDb[0].adminPassword == hashPassword) {
                const userDetail = {
                    userName: checkUserInDb[0].adminUserName,
                    message: 'successfully login'
                };
                return userDetail;
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
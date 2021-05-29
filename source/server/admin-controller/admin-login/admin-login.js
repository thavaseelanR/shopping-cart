
const md5 = require('md5');
const { AdminLogin } = require('../../model/index');

async function adminLoginUser(userName, password) {
    try {
        const hashPassword = md5(password);

        if (userName) {
            const checkUserInDb = await AdminLogin.find({ adminUserName: userName }).exec();
            if (checkUserInDb.length > 0) {

                if (checkUserInDb[0].adminUserName == userName && checkUserInDb[0].adminPassword == hashPassword) {
                    const userDetail = {
                        userName: checkUserInDb[0].adminUserName,
                        message: 'successfully login'
                    };
                    return userDetail;
                } else {
                    let res = { message: 'Invalid Password' };
                    return res;
                }

            } else {
                let res = { message: 'Invalid Username' };
                return res;
            }
        }

        return {
            userName: "asdasd",
            message: 'successfully login'
        };
    }
    catch (e) {
        console.log(e);
    }
}

module.exports = adminLoginUser;
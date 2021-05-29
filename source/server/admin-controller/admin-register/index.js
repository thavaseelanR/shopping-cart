const adminUserRegister = require('./admin-register')
const response = require('../../common-service/response/index');
const sendEmail = require('../../common-service/email/index');
const generatePassword = require('../../common-service/genarate-password')
async function adminRegister(req, res) {
    try {
        const { adminFirstName, adminLastName, adminUserName, adminRole, date, active } = req.body;
        const password = generatePassword()
        const adminRegisterUser = await adminUserRegister(adminFirstName, adminLastName, adminUserName, password, adminRole, date, active);
        if (adminRegisterUser.message == 'successfully register') {
            res.render('pages/email', {
                firstName: adminFirstName,
                userName: adminUserName,
                password: password
            }, async function (err, emailhtml) {
                await sendEmail(adminUserName, emailhtml);
            });
            let userInfo = { adminFirstName, adminLastName, adminUserName, adminRole, date, active };
            response.successResponse(adminRegisterUser.message, userInfo,
                totalRecord = null, statusCode = 200, req, res)
        }
        else {
            response.failedResponse(adminRegisterUser.message, null, statusCode = 400, req, res)
        }
    }
    catch (e) {

    }
}

module.exports = adminRegister;
const adminUserRegister = require('./admin-register')

async function adminRegister(req, res) {
    try {
        res.send('done')
        // const { firstName, lastName, email, roleName, date, active } = req.body.data;
        // const adminRegisterUser = adminUserRegister(firstName, lastName, email, roleName, date, active);
        // if (adminRegisterUser == 'successfully register') {

        // }
    }
    catch (e) {

    }
}

module.exports = adminRegister;
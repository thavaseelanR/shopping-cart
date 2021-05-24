const { AdminLogin } = require('../../model/index');

async function adminUserRegister(firstName, lastName, email, roleName, date, active) {
    try {
        if (firstName, lastName, email, roleName, date, active) {
            const getAllAdminRegisterUser = await AdminLogin.find();
            if (getAllAdminRegisterUser[0].adminEmail == email) {
                const adminRegisterUser = await AdminLogin({
                    adminFirstName: firstName, adminLastName: lastName,
                    adminEmail: email, adminRole: roleName, date: date, active: active
                })
                adminRegisterUser.save();
                return 'successfully register';
            }
            else {
                return 'User Alltrady Register';
            }

        }
        else {
            return 'Data not register';
        }

    }
    catch (e) {

    }
}

module.exports = adminUserRegister;
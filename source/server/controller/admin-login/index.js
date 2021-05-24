const adminLoginUser = require('./admin-login');

async function adminLogin(req, res) {
    try {

        const { userName, password } = req.body.data;
        const adminLoginUserDetail = await adminLoginUser(userName, password);
        if (adminLoginUserDetail.message == 'successfully login') {
            req.session.adminLoginUserDetail = {
                userName: adminLoginUserDetail.userName,
                userRole: adminLoginUserDetail.adminRole,
                isLoggedIn: true
            }

            res.send({
                message: 'successfully login',
                userName: adminLoginUserDetail.userName,
            });
        }

    }
    catch (e) {
        console.log(e);
    }
}

module.exports = adminLogin;



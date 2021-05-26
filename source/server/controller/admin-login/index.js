const adminLoginUser = require('./admin-login');

async function adminLogin(req, res) {
    try {

        const { userName, password } = req.body;
        const adminLoginUserDetail = await adminLoginUser(userName, password);
        if (adminLoginUserDetail.message == 'successfully login') {
            req.session.adminLoginUserDetail = {
                userName: adminLoginUserDetail.userName,
                userRole: 'admin',
                isLoggedIn: true
            }
            req.session.save();
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



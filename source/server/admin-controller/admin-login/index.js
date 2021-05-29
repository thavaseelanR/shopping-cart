const adminLoginUser = require('./admin-login');
const response = require('../../common-service/response/index');

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
            response.successResponse('successfully login', adminLoginUserDetail.userName, null, 200, req, res)
        }
        else {
            response.failedResponse(adminLoginUserDetail.message, null, 401, req, res)
        }

    }
    catch (e) {
        console.log(e);
    }
}

module.exports = adminLogin;



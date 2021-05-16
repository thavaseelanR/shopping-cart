const adminLoginUser = require('./admin-login');

function adminLogin(req, res) {
    try {
        const { userName, password } = req.body;
        const adminLoginUserDetail = adminLoginUser(userName, password);
    }
    catch (e) {
        console.log(e);
    }
}

module.exports = adminLogin;
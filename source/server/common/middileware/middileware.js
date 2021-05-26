module.exports = function(app) {
    app.use((req, res, next) => {
        let isLoggedIn = false;
        if (req.session && req.session.adminLoginUserDetail && req.session.adminLoginUserDetail.isLoggedIn) {
            next();
        }
        const unAuthedService = ['/admin-login', '/admin-register'];
        if (unAuthedService.includes(req.path)) {
            next();
        } else {
            res.status(200).json("UN_AUTHED");
        }
    })
}


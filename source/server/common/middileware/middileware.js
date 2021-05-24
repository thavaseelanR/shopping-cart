module.exports = function(app) {
    app.use((req, res, next) => {
        let isLoggedIn = false;
        if (req.session && req.session.adminLoginUserDetail && req.session.adminLoginUserDetail.isLoggedIn) {
            next();
        }
        const unAuthedService = ['/admin-login',];
        if (unAuthedService.includes(req.path)) {
            next();
        } else {
            res.status(500).json("UN_AUTHED");
        }
    })
}


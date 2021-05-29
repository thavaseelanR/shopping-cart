module.exports = function (router) {
    router.use((req, res, next) => {
        try {
            if (req?.session?.adminLoginUserDetail?.isLoggedIn) {
                next();
            } else {
                const unAuthedService = ['/admin-login', '/admin-register', '/get-admin-user-list'];
                if (unAuthedService.includes(req.path)) {
                    next();
                } else {
                    res.status(200).json("UN_AUTHED");
                }
            }
        } catch (e) {
            console.log(e);
        }
    })
}


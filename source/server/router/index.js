module.exports = (app) => {
    const authRouter = require('./admin-auth-router/index');
    authRouter(app);
}
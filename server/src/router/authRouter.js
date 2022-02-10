const AuthController = require('../controlllers/authController');
const authRouter = require('express').Router();

authRouter.post('/sigh-up', AuthController.signUp);
authRouter.post('/sign-in', AuthController.signIn);
authRouter.post('/refresh', AuthController.refresh);

module.exports = authRouter;
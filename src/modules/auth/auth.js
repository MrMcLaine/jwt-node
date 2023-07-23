const Router = require('koa-router');
// eslint-disable-next-line import/no-extraneous-dependencies
const bodyParser = require('koa-bodyparser');
const {compareSync} = require('bcryptjs');
// eslint-disable-next-line import/no-extraneous-dependencies
const jwt = require('jsonwebtoken');
// eslint-disable-next-line import/no-extraneous-dependencies
const uuid = require('uuid');
const userService = require('../../services/user');
const config = require('../../config');

const router = new Router();

router.post('/login', bodyParser(), async ctx => {
    // eslint-disable-next-line no-unused-expressions
    const {login, password} = ctx.request.body;
    const user = await userService.find({login});
    if (!user || !compareSync(password, user.password)) {
        const error = new Error();
        error.status = 403;
        throw error;
    }

    const refreshToken = uuid.v4();
    ctx.body = {
        token: jwt.sign({id: user.id}, config.secret),
        refreshToken,
    };
});

module.exports = router;

// eslint-disable-next-line import/no-extraneous-dependencies
const rc = require('rc');

module.exports = rc('JWT', {
    port: process.env.PORT || 3000,
    connection: './data',
    secret: 'VERYSECRETKEY',
});

const { test } = require('ava');


test.todo('User can successfully login');
test.todo('User gets 403 on invalid login');
test.todo('User gets 401 on expired token');
test.todo('User can refresh access token using refresh token');
test.todo('User can use refresh token only once');
test.todo('Refresh tokens become invalid on logout');
test.todo('Multiple refresh tokens are allowed');
require('dotenv').config({path: "../config/.env"});
require('../config/db.config');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const appAuth = express();
const morgan = require('morgan');

appAuth.use(bodyParser.urlencoded({extended: true}));
appAuth.use(bodyParser.json());
appAuth.use(cookieParser());
appAuth.use(cors());

const staffRoute = require('./routes/staff.route');
const authRoute = require('./routes/auth.route');

const {
    checkUser,
    requireAuth
} = require("./middlewares/auth.middleware");
//
// appAuth.get('*', checkUser);
// appAuth.get('/api/staff/*', requireAuth);
appAuth.use('/api/staff', staffRoute);
appAuth.use('/api/auth', authRoute);

appAuth.get('/', function (req, res) {
    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies)
    res.send(req.cookies);
    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies)
})

appAuth.listen(process.env.PORT_AUTH, () =>
    console.log("Auth server is running on port :"+process.env.PORT_AUTH)
)
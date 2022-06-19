const jwt = require('jsonwebtoken');
const Staff = require("../models/staff.model");


module.exports.checkUser = (req, res, next) => {
    let token= req.cookies.jwt;
    if (token) {
        jwt.verify(
            token, process.env.TOKEN_SECRET,'', async (err, decodedToken) => {
                if (err) {
                    res.locals.user = null;
                    res.cookie('jwt', '', { maxAge: 1 });
                    next();
                } else {
                    res.locals.user = await Staff.findById(decodedToken.id);
                    next();
                }
            });
    } else {
        res.locals.user = null;
        next();
    }
}


module.exports.requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(
            token, process.env.TOKEN_SECRET,'', async (err, decodedToken) => {
                if (err) {
                    console.log(err);
                    res.json({auth: false})
                } else {
                    console.log(decodedToken.id);
                    next();
                }
            });
    } else {
        res.json({auth: false})
        console.log('No token');
    }
}
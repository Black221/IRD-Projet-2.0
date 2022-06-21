const jwt = require('jsonwebtoken');
const Staff = require("../models/staff.model");

module.exports.checkUser = (req, res, next) => {
    const bearerToken = req.headers['authorization'];
    if (!bearerToken) {
        console.log('no bearer token')
        return;
    }
    const token = bearerToken.split(' ')[1];
    if (token) {
        jwt.verify(
            token, process.env.TOKEN_SECRET,'', async (err, decodedToken) => {
                if (err) {
                    console.log('echec')
                } else {
                    res.header('authorization', token);
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
                } else {
                    console.log(decodedToken.id);
                    next();
                }
            });
    } else {
        console.log('No token');
    }
}
const Staff = require('../models/staff.model')
const jwt = require('jsonwebtoken');
const {loginValidation, registerValidation} = require('../utils/validation');
const bcrypt = require("bcrypt");

const MAX_AGE = 8 * 60 * 60 * 1000;
const createToken = (id) => {
    return jwt.sign(
        { user : id}, process.env.TOKEN_SECRET, { expiresIn: MAX_AGE}
    )
};

module.exports.staffRegister = async (req, res) => {
    const {error} = registerValidation(req.body);
    if (error)
        return res.status(400).json(error.details[0].message);

    const loginExiste = await Staff.findOne({ login: req.body.login});
    if (loginExiste)
        return res.status(400).json('Login already exists');

    const staff = new Staff ({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        login: req.body.login,
        password: req.body.password,
        birthday: req.body.birthday,
        sex: req.body.sex,
        profession: req.body.profession,
        address: req.body.address,
        cni : req.body.cni,
        phone : req.body.phone
    });
    console.log(staff);
    try {
        const newStaff = await staff.save();
        res.status(200).json({newStaff});
    } catch (err) {
        res.status(400).json({err});
    }
}

module.exports.login = async (req, res) => {
    const {error} = loginValidation(req.body);
    if (error)
        return res.status(400).json(error.details[0].message);
    try {
        const staff = await Staff.findOne({ login: req.body.login});
        if (!staff)
            return res.status(400).json('Invalid login or password');
        const validPass = await bcrypt.compare(req.body.password, staff.password);
        if (!validPass)
            return res.status(400).json('Invalid login or password');
        const token = createToken(staff._id)
        res.status(200).setHeader('authorization', `Bearer ${token}`).json({
            userId: staff._id,
            token: token
        });

    } catch (err) {
        res.status(400).json({err : err});
    }
};

module.exports.isAuth = (req, res) => {
    const token= req.headers['authorization'].split(' ')[1];
    try {
        console.log("token :" + token);
        if (token) {
            jwt.verify(
                token, process.env.TOKEN_SECRET,'', async (err, decodedToken) => {
                    if (err) {
                        console.log(token)
                        res.status(200).send({ error: err, isAuth: false});
                    } else {
                        console.log(token)
                        res.status(200).send({isAuth: true, id: decodedToken.id});
                    }
                });
        } else {
            res.status(200).send({isAuth: false, token: token});
            console.log(token);
        }
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }

}
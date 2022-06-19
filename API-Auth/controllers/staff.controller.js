const Staff = require('../models/staff.model');
const {ObjectId} = require("mongodb");
const {updateValidation} = require("../utils/validation");

module.exports.getAllStaff = async (req, res) => {
    try {
        const staffs = await Staff
            .find()
            .select('-password');
        return res.status(200).json({staffs : staffs});
    } catch (err) {
        return res.status(400).json({error: err});
    }
}

module.exports.getOneStaff= async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('ID unknown');
    try {
        const staff = await Staff
            .findById({_id: req.params.id})
            .select('-password');
        return res.status(200).json({staff : staff});
    } catch (err) {
        return  res.status(400).json({error: err});
    }
}

module.exports.deleteStaff = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('ID unknown');
    try {
        await Staff
            .remove({_id: req.params.id})
            .exec();
        return res.status(200).json({message: "Successfully deleted"});
    } catch (err) {
        return res.status(400).json({error: err});
    }
}

module.exports.updateStaff = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('ID unknown');
    const {error} = updateValidation(req.body);
    if (error)
        return res.status(400).json(error.details[0].message);
    try {
        const staff = await Staff.findByIdAndUpdate(
            {_id: req.params.id},
            {
                $set: {
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    password: req.body.password,
                    birthday: req.body.birthday
                }
            }
        ).select('-password');
        res.status(200).json({staff : staff});
    } catch (err) {
        return res.status(500).json({ message: err });
    }
}

module.exports.logout = (req, res) => {
    res.status(200).cookie('jwt', '', { maxAge: 1 }).json('disconnected');
};

module.exports.validateRegister = async (req, res) => {
    if (!ObjectId.isValid(req.params.staff))
        return res.status(400).send('Id unknown');
    if (!ObjectId.isValid(req.params.register))
        return res.status(400).send('Id unknown');
    try {
        const staff = await Staff
            .findById({_id: req.params.staff})
            .select("-password");
        /*
        if (staff.canAccept)

         */
        const newStaff = await Staff.findByIdAndUpdate(
            {_id: req.params.register},
            {
                $set: {
                    accept: true
                }
        });

    } catch (err) {

    }
};
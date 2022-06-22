const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const staffSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true,
            min: 6,
            max: 255
        },
        lastname: {
            type: String,
            required: true,
            min: 6,
            max: 255
        },
        email: {
            type: String,
            required: true,
            min: 6,
            max: 255
        },
        password: {
            type: String,
            required: true,
            min: 8,
            max: 1024
        },
        login: {
            type: String,
            unique: true,
            require: true
        },
        birthday: {
            type: String
        },
        accept: {
            type: Boolean,
            default: false
        }
    }
)

staffSchema.pre("save", async function (next)  {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const Staff = mongoose.model('Staff', staffSchema);
module.exports = Staff;
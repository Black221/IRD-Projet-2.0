const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const staffSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        // numberMedicalStaff: {
        //     type: String,
        //     unique: true
        // },
        birthday: {
            type: String
        },
        cni: {
            type: String,
            minLength: 13,
            maxLength: 13
        },
        nationality: {
            type: String
        },
        sex: {
            type: String,
            enum: ['M', 'F']
        },
        address: {
            country: {
                type: String,
                default: 'Senegal'
            },
            city: {
                type: String
            },
            address: {
                type: String
            }
        },
        phone: {
            type : String
        },
        login: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        profession: {
            type: String
        },
        permission: {
            type: String,
            enum: ['admin', 'special', 'user'],
            default: 'user',
            required: true
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
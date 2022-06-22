const { default: mongoose } = require("mongoose");

const MedicalStaffSchema = mongoose.Schema({

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
        required: true
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
    }
})

module.exports = mongoose.model('MedicalStaff', MedicalStaffSchema)
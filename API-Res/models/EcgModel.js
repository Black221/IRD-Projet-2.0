const { default: mongoose } = require("mongoose");

const EcgSchema = mongoose.Schema({
    dataset_name: { // foreign key
        type: String, 
        required: true
    },
    metadata_id: { // foreign key
        type: String, 
        required: true 
    },
    patient_id: { // foreign key
        type: String,
        required: true
    },
    filename: { //idECG_nomPatient
        type: String,
        unique: true
    },
    filepath: {
        type: String,
        unique: true
    },
    state: { 
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('Ecg', EcgSchema)
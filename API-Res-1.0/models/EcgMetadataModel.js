const { default: mongoose } = require("mongoose");

const EcgMetadataSchema = mongoose.Schema({
    ecg_id: { // foreign key
        type: String,
        required: true,
        unique: true
    },
    metadata_id: { // foreign key
        type: String
    },
    cardiac_diseases: {
        type: String
    },
    recording: {
        started_at: {
            type: String
        },
        ended_at: {
            type: String
        }
    },
    patient: {
        age: {
            type: Number
        },
        height: {
            type: String
        },
        weight: {
            type: String
        },
        sex: {
            type: String,
            enum: ['M', 'F']
        }
    },
    state: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('EcgMetadata', EcgMetadataSchema)
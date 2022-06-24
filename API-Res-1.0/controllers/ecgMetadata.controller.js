const EcgMetadataModel = require("../models/EcgMetadataModel")
const EcgModel = require("../models/EcgModel")
const MetadataModel = require("../models/MetadataModel")
const Staff = require("../models/staff.model")


//Creer un ECG Metadata
// /ecg
module.exports.addOneECGMetadata = async(req, res) => {
    const ecg_id = EcgModel.findById({ _id: req.params.ecgId })
    const creater = await Staff.findById({ _id: req.params.createrId })
    if (!creater) return res.status(400).json('Personnel inexistant')

    if (ecg_id) {
        const allecg = await EcgMetadataModel.find({ ecg_id: req.params.ecgId })
        if (allecg.length > 0) return res.status(400).json('ECG metadata déjà existant')
        const metadata = await new MetadataModel({
            created_by: req.params.createrId,
            last_updated_by: req.params.createrId
        })
        const newMetadata = await metadata.save()
        const newECGMetadata = await new EcgMetadataModel({
            ecg_id: req.params.ecgId,
            metadata_id: newMetadata._id,
            recording: req.body.recording,
            patient: req.body.patient,
            cardiac_diseases: req.body.cardiac_diseases
        })
        newECGMetadata.save().then(data => res.status(200).send(data)).catch(err => res.send(500, 'Echec lors de l\'insertion de l\'ecg metadata dans la base de donnée'))
    } else {
        res.status(400).json('ECG inexistant')
    }


}
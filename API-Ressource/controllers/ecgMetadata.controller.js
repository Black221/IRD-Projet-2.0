const EcgMetadataModel = require("../models/EcgMetadataModel")
const EcgModel = require("../models/EcgModel")
const MetadataModel = require("../models/MetadataModel")


//Creer un ECG Metadata
// /ecg
module.exports.addOneECGMetadata = async(req, res) => {
    const numberECG = new EcgModel({
        ecg_id: req.body.mumberECG
    })
    const metadata = MetadataModel({
        created_by: req.body.creater,
        last_updated_by: req.body.creater

    })
    const newNumberECG = await numberECG.save
    const newMetadata = await metadata.save()
    const newECGMetadata = EcgMetadataModel({
        recording:{
            started_at: req.body.started_at,
            ended_at: req.body.ended_at            
        },
        patient:{
            age: req.body.age,
            height: req.body.height,
            weight: req.body.weight,
            sex: req.body.sex
        }
    })
    newECGMetadata.save().then(data => res.status(200).send(data)).catch(err => res.send(500, 'Echec lors de l\'insertion de la pathologie dans la base de donnée'))

}

//Afficher un ECG Metadata
// /ecg/:numberECG
module.exports.getOneECGMetadata = async(req, res) => {
    try {
        const oneECGMetadata = await EcgMetadataModel.find({ecg_id: numberECG})
        if (oneECGMetadata) {
            res.status(200).send({oneECGMetadata})
        } else {
            res.status(400).send({message: 'ECG Metadata inexistant'})
        }
    } catch (error) {
        res.status(500).send({message: error})
    }
}

//Modifier un ECG Metadata
// /ecg/:numberECG
module.exports.updateOneECGMetadata = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}

//Supprimer un ECG Metadata

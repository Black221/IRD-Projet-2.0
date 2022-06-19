const DatasetModel = require("../models/DatasetModel")
const EcgModel = require("../models/EcgModel")
const MetadataModel = require("../models/MetadataModel")
const fs = require("fs")
const MedicalStaffModel = require("../models/MedicalStaffModel")
const EcgMetadataModel = require("../models/EcgMetadataModel")
const {ObjectId} = require("mongodb");
require('dotenv').config({ path: './.env' });


// Afficher toutes les pathologies
module.exports.getAllDataset = async(req, res) => {
    try {
        const allDataset = await DatasetModel.find();
        // for (const allDatasetElement of allDataset) {
        //
        //
        // }
        if (allDataset) {
            res.status(200).json({pathologies: allDataset})      
        } else {
           res.status(200).json('Rien dans la base de donnée') 
        }
    } catch (error) {
        res.status(500).send('Echec lors de l\'affichage des pathologies présents dans la base de donnée')
    }
}

// Afficher une pathologie
module.exports.getOneDataset = async(req, res) => {
    try {
        const oneDataset = await DatasetModel.findById(req.params.datasetId)
        const oneMetadata = await MetadataModel.findById(oneDataset.metadata_id)
        if (oneDataset) {
           res.status(200).send({pathologie: oneDataset, metadata: oneMetadata})
        } else {
            res.status(400).send({message: 'Id inexistant'})
        }
    } catch (error) {
        res.status(500).send({message: error})
    }
}

// Ajouter une pathologie
module.exports.addOneDataset = async(req, res) => {
    // const creater = await MedicalStaffModel.findById({_id: req.params.createrId})
    // if(!creater) return res.status(400).json('Personnel inexistant')
    if (!ObjectId.isValid(req.params.createrId))
        return res.status(404).json('ID unknown');
    try {
        const metadata = new MetadataModel({
            created_by: req.params.createrId,
            last_updated_by: req.params.createrId
        })
        const newMetadata = await metadata.save()
        const newDataset = new DatasetModel({
            name: req.body.name,
            metadata_id: newMetadata._id,
            description: req.body.description
        })
        const data = newDataset.save()
        res.status(200).send({pathologie: data, metadata: newMetadata})
        // const datasetRep = dataset.name.split(" ").join("-") +"_"+  dataset._id
        // const dir = process.env.ECG_PATH +""+ process.env.SE +""+ datasetRep
        // if (!fs.existsSync(dir)){
        //     fs.mkdirSync(dir, { recursive: true });
        // }
    } catch (error) {
        res.status(500).json({message: error})
        const deletedMetadata = await MetadataModel.deleteOne({_id: newMetadata._id})
    }
}

// Modifier une pathologie
module.exports.updateOneDataset = async(req, res) => {
    const updater = await MedicalStaffModel.findById({_id: req.params.updaterId})
    if(!updater) return res.status(400).json('Personnel inexistant')
    try {
        const dataset = await DatasetModel.findById({_id: req.params.datasetId})
        if (!dataset) return res.status(400).send('Pathologie inexistante')
        const datasetName = dataset.name
        const updatedDataset = await DatasetModel.findByIdAndUpdate(
            {_id: req.params.datasetId},
            {$set: {
                name: req.body.name,
                description: req.body.description,
            }},
            { new: true, upset: true, setDefaultsOnInsert: true }
        )
        const updatedMetadata = await MetadataModel.findByIdAndUpdate(
            {_id: updatedDataset.metadata_id},
            {
                $set: {
                    last_updated_by: req.params.updaterId
                }
            },
            { new: true, upset: true, setDefaultsOnInsert: true }
        )
        res.status(200).json({pathologie: updatedDataset, metadata: updatedMetadata})   
        if (dataset.name != updatedDataset.name) {
            const oldDatasetRep = dataset._id +"_"+ dataset.name.split(" ").join("-")
            const oldDir = process.env.ECG_PATH +""+ process.env.SE +""+ oldDatasetRep
    
            const datasetRep = updatedDataset._id +"_"+ updatedDataset.name.split(" ").join("-")
            const dir = process.env.ECG_PATH +""+ process.env.SE +""+ datasetRep
            
            if (!fs.existsSync( oldDir)){
                fs.mkdirSync(dir, { recursive: true });
            } else {
                fs.rename(oldDir, dir)
            }
    
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

// SUPPRESSION DES DONNEES TECHNIQUES DES ECGS IMPOSSIBLE pour patient aussi *

// Supprimer une pathologie
module.exports.removeOneDataset = async(req, res) => {
    try {
        const oneDataset = await DatasetModel.findById(req.params.datasetId)
        if (oneDataset) {
            await DatasetModel.deleteOne({_id:req.params.datasetId})
            await MetadataModel.deleteOne({_id: oneDataset.metadata_id})
            const allEcgs = await EcgModel.find({dataset_id: oneDataset._id})
            allEcgs.forEach(ecg => {
                MetadataModel.deleteOne({_id: ecg.metadata_id})
                EcgMetadataModel.deleteOne({ecg_id: ecg._id}) 
            });
            await EcgModel.deleteMany({dataset_id: oneDataset._id})
            res.status(200).json('Suppression de la pathologie ' +oneDataset.name+ ' avec succès...')     
            
            fs
    
        } else {
           return res.status(400).send({message: 'Id inexistant'})
        }
    
    } catch (error) {
        res.status(500).send({message: error})
    }   
}
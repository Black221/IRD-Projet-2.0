/**
 * INCLUDES MODULES AND SETS UP SERVER
 */

require('dotenv').config({ path: '../config/.env' });
require('../config/db.config')
const express = require('express');

const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const routeForEcg = require('./routes/route.ecg');
const routeForPatient = require('./routes/route.patient');
const routeForMedicalStaff = require('./routes/route.medicalStaff');
const routeForDataset = require('./routes/route.dataset');
const appRes = express();
// const fs = require('fs')
const fileUpload = require('express-fileupload');
const EcgModel = require("./models/EcgModel");
const MetadataModel = require("./models/MetadataModel");
const routeForEcgMetadata = require("./routes/route.ecgMetadata");
// const replace = require('replace');

/**
 * middlewares
 */
appRes.use(bodyParser.json());
appRes.use(cors());

appRes.use(fileUpload({createParentPath: true}))
appRes.use('/ecg', routeForEcg);
appRes.use('/patient', routeForPatient);
appRes.use('/staff', routeForMedicalStaff);
appRes.use('/dataset', routeForDataset);
appRes.use('/ecgMetadata', routeForEcgMetadata);

appRes.get('/metadata/get/specific/:id', async (req, res) => {
    try {
        const oneMetadata = await MetadataModel.findById({ _id: req.params.id })
        res.status(200).send({ metadata: oneMetadata })

    } catch (error) {
        res.status(500).send({ message: error })
    }
})

appRes.post('/ecg/file/:id', async (req, res) => {
    try {
        const ecg = await EcgModel.findById({ _id: req.params.id })
        if (req.files) {
            let ecgFile = req.files.ecgFile
            await ecgFile.mv(ecg.filepath);
        } else {
            res.status(400)
        }
    } catch (error) {
        res.status(500).send({ message: error })
    }
})

/*
 *listening on port given in .env file
 */

appRes.listen(process.env.PORT_RES, () => {
    console.log(`Server is running on port ${process.env.PORT_RES}`);
});

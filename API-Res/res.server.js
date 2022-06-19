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


/*
 *listening on port given in .env file
 */

appRes.listen(process.env.PORT_RES, () => {
    console.log(`Server is running on port ${process.env.PORT_RES}`);
});

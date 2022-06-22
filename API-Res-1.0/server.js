/**
 * INCLUDES MODULES AND SETS UP SERVER
 */
require('dotenv').config({ path: './config/.env' });
require('./API-Ressource/db')
const express = require('express');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routeForEcg = require('./routes/route.ecg');
const routeForPatient = require('./routes/route.patient');
const routeForMedicalStaff = require('./routes/route.medicalStaff');
const routeForDataset = require('./routes/route.dataset');
const routeForEcgMetadata = require('./routes/route.ecgMetadata');
const app = express();
const fs = require('fs')
const fileUpload = require('express-fileupload');
const replace = require('replace');
const cors = require('cors')
    /**
     * middlewares
     */


app.use(bodyParser.json());
app.use(cors())
app.use(fileUpload({ createParentPath: true }))
app.use('/ecg', routeForEcg);
app.use('/patient', routeForPatient);
app.use('/medicalStaff', routeForMedicalStaff);
app.use('/dataset', routeForDataset);
app.use('/ecgMetadata', routeForEcgMetadata);


/*
 *listening on port given in .env file
 */

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
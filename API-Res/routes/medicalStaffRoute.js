const express = require('express');
const routerMedicalStaff = express.Router();
const medicalStaffController = require('../controllers/medicalStaffController');

/**
 * routes for medicalStaff
**/

routerMedicalStaff.get('/getAll/:getterId', medicalStaffController.getAllMedicalStaff);
routerMedicalStaff.get('/getOne/getterId/:medicalStaffId', medicalStaffController.getMedicalStaffById);
routerMedicalStaff.post('/postOne/:posterId', medicalStaffController.postOneMedicalStaff); 
routerMedicalStaff.put('/updateOne/updaterId/:medicalStaffId', medicalStaffController.updateMedicalStaff);
routerMedicalStaff.delete('/deleteOne/deleterId/:medicalStaffId', medicalStaffController.deleteMedicalStaff);

module.exports = routerMedicalStaff;
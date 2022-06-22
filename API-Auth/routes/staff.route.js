const router = require('express').Router();
const {
    getAllStaff,
    getOneStaff,
    updateStaff,
    deleteStaff,
    logout
} = require('../controllers/staff.controller');

router.get('/logout', logout)

router.get('/all', getAllStaff);
router.get('/specific/:id', getOneStaff);

router.delete('/delete/:id', deleteStaff);
router.patch('/update/:id', updateStaff);

module.exports = router;
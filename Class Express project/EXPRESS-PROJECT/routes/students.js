const express = require('express');
const router = express.Router();


const { getStudents, createStudent } = require('../controllers/studentControllers');


router.get('/', getStudents);
router.post('/', createStudent)


module.exports = router;
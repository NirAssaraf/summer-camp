const express = require('express');
const {addstudent, 
       getAllstudents, 
       getstudent,
       updatestudent,
       deletestudent
      } = require('../controllers/studentController');

const router = express.Router();

router.post('/student', addstudent);
router.get('/students', getAllstudents);
router.get('/student/:id', getstudent);
router.put('/student/:id', updatestudent);
router.delete('/student/:id', deletestudent);


module.exports = {
    routes: router
}
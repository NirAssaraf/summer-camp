const express = require('express');
const {adduser, 
       getAllusers, 
       getuser,
       updateuser,
       deleteuser
      } = require('../controllers/userController');

const router = express.Router();

router.post('/user', adduser);
router.get('/users', getAllusers);
router.get('/user/:id', getuser);
router.put('/user/:id', updateuser);
router.delete('/user/:id', deleteuser);


module.exports = {
    routes: router
}
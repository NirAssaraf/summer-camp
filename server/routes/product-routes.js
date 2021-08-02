const express = require('express');
const {addproduct, 
       getAllproducts, 
       getproduct,
       updateproduct,
       deleteproduct
      } = require('../controllers/productController');

const router = express.Router();

router.post('/product', addproduct);
router.get('/products', getAllproducts);
router.get('/product/:id', getproduct);
router.put('/product/:id', updateproduct);
router.delete('/product/:id', deleteproduct);


module.exports = {
    routes: router
}
'use strict';

const firebase = require('../db');
const Product = require('../models/product');
const firestore = firebase.firestore();


const addproduct = async (req, res, next) => {
    try {
        const data = req.body;
        const product = new Product(
            data.productID,
            data.productName,
            data.productPrice,
            data.productQuntity,
            data.productStatus,
            data.productCoupon
        );
        await firestore.collection('products').doc().set(product);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllproducts = async (req, res, next) => {
    try {
        const products = await firestore.collection('products');
        const data = await products.get();
        const productsArray = [];
        if(data.empty) {
            res.status(404).send('No product record found');
        }else {
            data.forEach(doc => {
                const product = new Product(
                    doc.data().productID,
                    doc.data().productName,
                    doc.data().productPrice,
                    doc.data().productQuntity,
                    doc.data().productStatus,
                    doc.data().productCoupon
                );
                product.id=doc.id;
                productsArray.push(product);
            });
            res.send(productsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getproduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log(req.params);
        const product = await firestore.collection('products').doc(id);
        const data = await product.get();
        if(!data.exists) {
            res.status(404).send('product with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateproduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const product =  await firestore.collection('products').doc(id);
        await product.update(data);
        res.send('product record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteproduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('products').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addproduct,
    getAllproducts,
    getproduct,
    updateproduct,
    deleteproduct
}
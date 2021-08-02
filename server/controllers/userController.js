'use strict';

const firebase = require('../db');
const User = require('../models/user');
const firestore = firebase.firestore();


const adduser = async (req, res, next) => {
    try {
        const data = req.body;
        const user = new User(
            data.email,
            data.name,
            data.password,
            data.role,
            data.isAdmin
        );
        await firestore.collection('users').doc().set(user);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllusers = async (req, res, next) => {
    try {
        const users = await firestore.collection('users');
        const data = await users.get();
        const usersArray = [];
        if(data.empty) {
            res.status(404).send('No user record found');
        }else {
            data.forEach(doc => {
                const user = new User(
                    doc.data().email,
                    doc.data().name,
                    doc.data().password,
                    doc.data().role,
                    doc.data().isAdmin
                );
                user.id=doc.id;
                usersArray.push(user);
            });
            res.send(usersArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getuser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await firestore.collection('users').doc(id);
        const data = await user.get();
        if(!data.exists) {
            res.status(404).send('user with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateuser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const user =  await firestore.collection('users').doc(id);
        await user.update(data);
        res.send('user record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteuser = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('users').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    adduser,
    getAllusers,
    getuser,
    updateuser,
    deleteuser
}
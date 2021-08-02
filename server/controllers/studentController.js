'use strict';

const firebase = require('../db');
const Student = require('../models/student');
const firestore = firebase.firestore();


const addstudent = async (req, res, next) => {
    try {
        const data = req.body;
        const student = new Student(
            data.studentID,
            data.name,
            data.grade,
            data.school,
            data.parentName,
            data.parentPhone,
            data.parentEmail,
            data.SocialDifficulties,
            data.WayHome,
        );
        await firestore.collection('students').doc().set(student);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllstudents = async (req, res, next) => {
    try {
        const students = await firestore.collection('students');
        const data = await students.get();
        const studentsArray = [];
        if(data.empty) {
            res.status(404).send('No student record found');
        }else {
            data.forEach(doc => {
                const student = new Student(
                    doc.data().studentID,
                    doc.data().name,
                    doc.data().grade,
                    doc.data().school,
                    doc.data().parentName,
                    doc.data().parentPhone,
                    doc.data().parentEmail,
                    doc.data().SocialDifficulties,
                    doc.data().WayHome,
                );
                student.id=doc.id;
                studentsArray.push(student);
            });
            res.send(studentsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getstudent = async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log(req.params);
        const student = await firestore.collection('students').doc(id);
        const data = await student.get();
        if(!data.exists) {
            res.status(404).send('student with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatestudent = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const student =  await firestore.collection('students').doc(id);
        await student.update(data);
        res.send('student record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deletestudent = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('students').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addstudent,
    getAllstudents,
    getstudent,
    updatestudent,
    deletestudent
}
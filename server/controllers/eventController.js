'use strict';

const firebase = require('../db');
const Event = require('../models/event');
const firestore = firebase.firestore();


const addevent = async (req, res, next) => {
    try {
        const data = req.body;
        const event = new Event(
            data.eventID,
            data.eventName,
            data.eventStartTime,
            data.eventEndTime,
            data.eventDate,
            data.eventLocation,
            this.eventStatus
        );
        await firestore.collection('events').doc().set(event);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllevents = async (req, res, next) => {
    try {
        const events = await firestore.collection('events');
        const data = await events.get();
        const eventsArray = [];
        if(data.empty) {
            res.status(404).send('No event record found');
        }else {
            data.forEach(doc => {
                const event = new Event(
                    doc.data().eventID,
                    doc.data().eventName,
                    doc.data().eventStartTime,
                    doc.data().eventEndTime,
                    doc.data().eventDate,
                    doc.data().eventLocation,
                    doc.data().eventStatus
                );
                event.id=doc.id;
                eventsArray.push(event);
            });
            res.send(eventsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAlleventsForDate = async (req, res, next) => {
    try {
        const date=req.body;
        const events = await firestore.collection('events').where('eventDate','==',date);
        const data = await events.get();
        const eventsArray = [];
        if(data.empty) {
            res.status(404).send('No event record found');
        }else {
            data.forEach(doc => {
                const event = new Event(
                    doc.data().eventID,
                    doc.data().eventName,
                    doc.data().eventStartTime,
                    doc.data().eventEndTime,
                    doc.data().eventDate,
                    doc.data().eventLocation
                );
                event.id=doc.id;
                eventsArray.push(event);
            });
            res.send(eventsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getevent = async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log(req.params);
        const event = await firestore.collection('events').doc(id);
        const data = await event.get();
        if(!data.exists) {
            res.status(404).send('event with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateevent = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const event =  await firestore.collection('events').doc(id);
        await event.update(data);
        res.send('event record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteevent = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('events').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addevent,
    getAllevents,
    getevent,
    updateevent,
    deleteevent,
    getAlleventsForDate
}
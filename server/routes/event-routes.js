const express = require('express');
const {addevent, 
       getAllevents, 
       getevent,
       updateevent,
       deleteevent,
       getAlleventsForDate
      } = require('../controllers/eventController');

const router = express.Router();

router.post('/event', addevent);
router.get('/events', getAllevents);
router.get('/event/:id', getevent);
router.put('/event/:id', updateevent);
router.delete('/event/:id', deleteevent);
router.get('/enentsForDate',getAlleventsForDate);

module.exports = {
    routes: router
}
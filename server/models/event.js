class Event {
    constructor( eventID, eventName, eventStartTime,eventEndTime,eventDate,eventLocation) {
            this.id="";
            this.eventID =eventID;
            this.eventName = eventName;
            this.eventStartTime=eventStartTime;
            this.eventEndTime=eventEndTime;
            this.eventDate=eventDate;
            this.eventLocation=eventLocation;
        }
    }
    
    module.exports = Event;
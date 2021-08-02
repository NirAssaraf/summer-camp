class Event {
    constructor( eventID, eventName, eventStartTime,eventEndTime,eventDate,eventLocation,eventStatus) {
            this.id="";
            this.eventID =eventID;
            this.eventName = eventName;
            this.eventStartTime=eventStartTime;
            this.eventEndTime=eventEndTime;
            this.eventDate=eventDate;
            this.eventLocation=eventLocation;
            this.eventStatus=eventStatus;
        }
    }
    
    module.exports = Event;
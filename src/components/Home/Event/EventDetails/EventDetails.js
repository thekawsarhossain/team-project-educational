import React from 'react';
import { useSelector } from 'react-redux';

const EventDetails = () => {

    const eventDetails = useSelector(state => state.events.eventDetails);
    console.log(eventDetails)

    return (
        <div>
            {
                eventDetails.length
            }
        </div>
    );
};

export default EventDetails;
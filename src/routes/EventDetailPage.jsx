import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EventFinder from '../apis/EventFinder';
import { EventsContext } from '../context/EventsContext';

const EventDetailPage = () => {
    const {id} = useParams();
    const {selectedEvent, setSelectedEvent} = useContext(EventsContext)

    useEffect(() => {
        const fetchData = async () => {

            try {
            const response = await EventFinder.get(`/${id}`);
            setSelectedEvent(response.data.data.event);
            } catch (err) {
                console.log(err)
            }
        };

        fetchData()
    }, []);
    return (
        <div>
            {selectedEvent && selectedEvent.name}
        </div>
    )
};

export default EventDetailPage;

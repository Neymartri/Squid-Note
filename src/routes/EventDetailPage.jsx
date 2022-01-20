import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EventFinder from '../apis/EventFinder';
import Reviews from '../components/Reviews';
import StarRating from '../components/StarRating';
import { EventsContext } from '../context/EventsContext';

const EventDetailPage = () => {
    const {id} = useParams();
    const {selectedEvent, setSelectedEvent} = useContext(EventsContext)

    //fetch a particular event name and render it on eventDetailPage via api
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

    //only render event name when event name is selected
    return (
        <div>
            {selectedEvent && (
                <>
                <div className="mt-3">
                    <Reviews/>
                </div>
                </>
            )}
        </div>
    )
};

export default EventDetailPage;

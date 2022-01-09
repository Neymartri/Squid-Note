import React, {useEffect, useContext} from 'react';
import EventFinder from '../apis/EventFinder';
import { EventsContext } from '../context/EventsContext';

const EventList = (props) => {
  const {events, setEvents} = useContext(EventsContext)
// Fetch data as soon as user components is on UI screen
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await EventFinder.get("/");
                setEvents(response.data.data.events);
            } catch(err) {
                console.log(err)
            }  
        }   
        
        fetchData();
    }, []);
//Add function to delete an event via api
     const handleDelete = async (id) => {
        try{
          const response = await EventFinder.delete(`/${id}`);
          setEvents(events.filter(event => {
              return event.id !== id
          }));
        } catch(err) {
            console.log(err);
        }
     }

    return (
        <div className="list-group">
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Events</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price Range</th>
                        <th scope="col">Ratings</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {events && events.map(event =>{
                        return (
                            <tr key = {event.id}>
                            <td>{event.name}</td>
                            <td>{event.location}</td>
                            <td>{"$".repeat(event.price_range)}</td>
                            <td>review</td>
                            <td>
                                 <button className="btn btn-warning">Update</button>
                            </td>
                            <td>
                                 <button onClick ={() => handleDelete(event.id)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                        );                
                    })};

                    {/* <tr>
                        <td>SouthBank Walk</td>
                        <td>SouthBank </td>
                        <td> $$ </td>
                        <td>Rating</td>
                        <td><button className="btn btn-warning">Update</button></td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>

                    <tr>
                        <td>SouthBank Walk</td>
                        <td>SouthBank </td>
                        <td> $$ </td>
                        <td>Rating</td>
                        <td><button className="btn btn-warning">Update</button></td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr> */}
                </tbody>
             </table>
        </div>
    );
};

export default EventList; 

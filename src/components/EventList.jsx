import React, {useEffect} from 'react';
import EventFinder from '../apis/EventFinder';

const EventList = () => {
// Fetch data as soon as user components is on UI screen
    useEffect(async() => {
        try {
            const response = await EventFinder.get("/")
            console.log(response)
        } catch(err) {

        }
    },[])

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
                    <tr>
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
                    </tr>
                </tbody>
             </table>
            
        </div>
    )
}

export default EventList

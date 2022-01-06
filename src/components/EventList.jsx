import React from 'react'

const EventList = () => {
    return (
        <div className="list-group">
            <table className="table table-hover table-white">
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

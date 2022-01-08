import React, { useState } from 'react'
import EventFinder from '../apis/EventFinder';
// Create Searchbars
const AddEvent = () => {
    // Add control input for searchbars 
       const [name, setName] = useState("")
       const [location, setLocation] = useState("")
       const [priceRange, setPriceRange] = useState("Price Range")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
             const response = await EventFinder.post("/", {
                name: name,
                location: location,
                price_range: priceRange,
            })
            console.log(response);
        } catch (err) {

        }
    }
    return (
        <div className= "mb-4">
            <form action= "">
                <div className= "form-row">
                     <div className= "col">
                        <input value = {name} onChange={e => setName(e.target.value)} type= "text" className="form-control" placeholder="Name" />
                     </div>
                     <div className="col">
                         <input value = {location} onChange={e => setLocation(e.target.value)}className= "form-control" type= "text" placeholder="Location" />
                     </div>
                     <div className="col">
                        <select 
                        value = {priceRange} 
                        onChange={e => setPriceRange(e.target.value)}
                        className= "custom-select my-1 mr-sm-2">
                            <option disabled>Price Range</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>
                        </select>
                     </div>
                     <button onClick={handleSubmit} type= "submit" className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddEvent;

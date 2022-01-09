import React, { useState } from 'react'
import { useParams } from 'react-router';

const UpdateEvent = (props) => {
    const {id} = useParams()
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("");

    return (
        <div>
            <form action="">
              <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input value = {name} onChange={e => setName(e.target.value)} id="name" className="form-control" type="text"/>
              </div>

              <div className="form-group">
                  <label htmlFor="name">Location</label>
                  <input value = {location} onChange={e => setLocation(e.target.value)} id="location" className="form-control" type="text"/>
              </div>
              
              <label htmlFor="price_range">Price range</label>
              <div className="col">
                        <select value = {priceRange} 
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
                     <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default UpdateEvent;
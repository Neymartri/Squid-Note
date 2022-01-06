// Set up context API 
import React, {useState, createContext} from "react";

export const EventsContext = createContext();
//UseState to store the list of Events in backends 
export const EventsContextProvider = props => {
    const [events, setEvents] = useState([])

    return (
        <EventsContext.Provider value={{events, setEvents}}>
            {props.children}
        </EventsContext.Provider>
    )
}
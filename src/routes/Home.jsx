import React from 'react'
import AddEvent from '../components/AddEvent';
import Header from '../components/Header';

//Connect Header to Home Component
const Home = () => {
    return (
        <div>
            <Header/>
            <AddEvent/>
        </div>
    );
};

export default Home;

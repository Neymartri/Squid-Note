import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventDetailPage from './routes/EventDetailPage'; 
import Home from './routes/Home';
import UpdatePage from './routes/UpdatePage';


const App = () =>{ 
  return <Router>
    <div>
        <Routes>
          <Route path = "/" element ={<Home/>}/>
          <Route path = "/events/:id/update" element ={<UpdatePage/>}/>
          <Route path = "/events/:id" element ={<EventDetailPage/>}/>
        </Routes>
    </div>
    </Router>
} 

// function App() {
//   return (
//     <div className={styles.app}>
//       <h1>Squid Note</h1>
//     </div>
//   );
// }

export default App;

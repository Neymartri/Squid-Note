// set environment variable and export express
require("dotenv").config(); 
const express = require("express");

const app = express();

// middleware for route handling
app.use((req, res, next) => {
    console.log("middleware running")
    next();
});

// Get all events route
app.get("/api/v1/events", (req, res) => {
    console.log("route handler running");
    res.status(200).json({
        status: "success",
        data: {
            events: ["pyjamas party", "food festival", "night market"],
        }, 
    });
});

//Get an Event
app.get("/api/v1/events/:id", (req, res) => {
    console.log(req.params);
}); 

//Create an Event
app.post("/api/v1/events", (req, res) => {
    console.log(req);
});


//create sever listener
const port = process.env.PORT || 3005; 
app.listen(port, ()=> {
    console.log(`server is running and listening on port ${port}`);
});


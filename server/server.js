// set environment variable and export express
require("dotenv").config(); 
const express = require("express");
const morgan = require("morgan");
//Import database from PostgreSQL
const db = require('./db')

const app = express();

// middleware for route handling via morgan 
 app.use(express.json());

// Get all events route
app.get("/api/v1/events", async (req, res) => {

    const results = await db.query("select * from events")
    console.log(results);
    res.status(200).json({
        status: "success",
        data: {
            event: ["pyjamas party", "food festival", "night market"],
        }, 
    });
});

//Get an Event
app.get("/api/v1/events/:id", (req, res) => {
    console.log(req.params);

    res.status(200).json({
        status: "success", 
        data: {
            event: "night market"
        },
    });
}); 

//Create an Event
app.post("/api/v1/events", (req, res) => {
    console.log(req.body);

    res.status(201).json({
        status: "success", 
        data: {
            event: "night market",
        },
    });
});

// Update an Event
app.put("/api/v1/events/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body)

    res.status(200).json({
        status: "success", 
        data: {
            event: "night market",
        },
    });
});

// Delete an event 
app.delete("/api/v1/events/:id", (req, res) => {
    res.status(204).json({
        status: "success",
    });
})

//create sever listener
const port = process.env.PORT || 3005; 
app.listen(port, ()=> {
    console.log(`server is running and listening on port ${port}`);
});


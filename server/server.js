// set environment variable and export express
require("dotenv").config(); 
const express = require("express");

const app = express();

// Get all events route
app.get("/api/v1/events", (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            events: ["pyjamas party", "food festival", "night market"],
        }, 
    });
});




//create sever listener
const port = process.env.PORT || 3005; 
app.listen(port, ()=> {
    console.log(`server is running and listening on port ${port}`);
});


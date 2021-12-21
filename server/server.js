// set environment variable and export express
require("dotenv").config(); 
const express = require("express");

const app = express();

// retrieve event route
app.get("/getEvents", (req, res) => {
    console.log("get all events");
});

//create sever listener
const port = process.env.PORT || 3005; 
app.listen(port, ()=> {
    console.log(`server is running and listening on port ${port}`);
});


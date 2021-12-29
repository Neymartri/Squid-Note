// set environment variable and export express
require("dotenv").config(); 
const express = require("express");
const morgan = require("morgan");
//Import database from PostgreSQL
const db = require('./db')

const app = express();

// middleware for route handling via morgan 
 app.use(express.json());

// Get all events route via async
app.get("/api/v1/events", async (req, res) => {
        try {
    const results = await db.query("select * from events");
    console.log(results);
     res.status(200).json({
        status: "success",
        results: results.rows.length,
        data: {
            events: results.rows,
        }, 
    });
        } catch (err) {
            console.log(err);
        }
    
});

//Get an Event via parameterized query
app.get("/api/v1/events/:id", async (req, res) => {
    console.log(req.params.id);

    try{
        const results = await db.query(
            "select * from events where id = $1", [req.params.id]);
      
    res.status(200).json({
        status: "success", 
        data: {
            event: results.rows[0],
        },
    });
    } catch (err) {
        console.log(err);
    }
}); 

//Create an Event
app.post("/api/v1/events", async (req, res) => {
    console.log(req.body);

    try {
        const results = await db.query("INSERT INTO events (name, location, price_range) values ($1, $2, $3) returning *", 
        [req.body.name, req.body.location, req.body.price_range]);

        res.status(201).json({
            status: "success", 
            data: {
                event: results.rows[0],
            },
        });

    } catch (err) {
        console.log(err)
    }

    
});

// Update an Event
app.put("/api/v1/events/:id", async (req, res) => {

    try{
        const results = await db.query("UPDATE events SET name = $1, location = $2, price_range = $3 where id = $4 returning *", 
        [req.body.name, req.body.location, req.body.price_range, req.params.id]);

        res.status(200).json({
            status: "success", 
            data: {
                event: results.rows[0],
            },
        });

    }catch (err) {
        console.log(err)
    }

    console.log(req.params.id);
    console.log(req.body)

    
});

// Delete an event 
app.delete("/api/v1/events/:id", async (req, res) => {

    try{
        const results = await db.query("DELETE FROM events where id = $1", 
        [req.params.id]); 
    
        res.status(204).json({
            status: "success",
        });
        
    } catch (err) {
        console.log(err)
    }
   
})

//create sever listener
const port = process.env.PORT || 3005; 
app.listen(port, ()=> {
    console.log(`server is running and listening on port ${port}`);
});


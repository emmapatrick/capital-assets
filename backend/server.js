import express from "express";

// create a web framework using express
const app = express();

// begin server on port 5001, log start message
app.listen(5001, () => {
    console.log("Server started on PORT 5001");
});

// listen for request on endpoint
app.get("/api/home", (req, res) => {
    // send 200 status & welcome message
    res.status(200).send("Welcome friend!");
});

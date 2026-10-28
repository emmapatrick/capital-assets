import express from "express";

// create a web framework using express
const app = express();

// listen for request on endpoint /home
app.get("/api/home", (req, res) => {
    // send OK status & welcome message
    res.status(200).send("Welcome friend!");
});

// user posts a change, send POSTED status & json msg
app.post("/api/home", (req, res) => {
    res.status(201).json({message: "Posted successfully."});
});

// user updates a post w/ dynamic id, send OK status & json msg
app.put("/api/home/:id", (req, res) => {
    res.status(200).json({message: "Updated successfully."});
});

// user deletes a post w/ dynamic id, send OK status & json msg
app.delete("/api/home/:id", (req, res) => {
    res.status(200).json({message: "Deleted successfully."});
});

// listen for server on port 5001, log start message
app.listen(5001, () => {
    console.log("Server started on PORT 5001");
});

import express from "express";
// use helper file for endpoint nav
import routes from "./routes/routes.js";


// create a web framework using express
const app = express();

// use endpoint api/assets and routes in helper file
app.use("/api/assets", routes);
// TODO: implement endpoint api/login for credential routes

// listen for server on port 5001, log start message
app.listen(5001, () => {
    console.log("Server started on PORT 5001");
});

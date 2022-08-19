// JavaScript Version: 6

// Dependencies
const express = require("express");
const CORS = require("cors");
const settings = require("./src/settings.json");

// Initilization
const webApp = express();
webApp.use(CORS());

// API Endpoints
webApp.get("/", (req, res) => {
    res.status(418).end("I'm a teapot");
});

// Open Server
const port = settings.server.port;
webApp.listen(port, () => {
    console.log(`Server started, port: ${port}`);
});

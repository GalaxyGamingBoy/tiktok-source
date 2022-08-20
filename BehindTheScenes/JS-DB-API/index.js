// JavaScript Version: 6

// Dependencies
const express = require("express");
const CORS = require("cors");
const settings = require("./res/settings.json");
const postgresqlManager = require("./src/postgresqlManager");
const SQLQueries = require("./src/SQLQuery").SQLQueries;

// Initialize PostgreSQL
const db = postgresqlManager(async (connection) => {
    await connection.query(
        "CREATE TABLE IF NOT EXISTS products (id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL, price INTEGER NOT NULL)"
    );
});

// Seed Database
const seedFile = require("./res/dbSeed.json");
for (let i = 0; i < seedFile.length; i++) {
    console.log(seedFile[i].name);
    db.query(SQLQueries("seedProduct", [seedFile[i].name, seedFile[i].price]));
}
// Initialize Express
const webApp = express();
webApp.use(CORS());

// API Endpoints
webApp.get("/", (req, res) => {
    db.query(SQLQueries("getProducts")).then((rows) => {
        res.status(200).end(JSON.stringify(rows));
    });
});

webApp.delete("/deleteAll", (req, res) => {
    db.query(SQLQueries("deleteAllProducts"));
    db.query(SQLQueries("resetPK"));
    res.status(200).end();
});

// Run the server
const port = settings.server.port;
webApp.listen(port, () => {
    console.log(`Server started, port: ${port}`);
});

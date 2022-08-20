/*jshint esversion: 6 */

const fs = require("fs");
const postgresql = require("pg");
const settings = JSON.parse(fs.readFileSync("src/dbSettings.json"));

const { Pool } = postgresql;
module.exports = (callback = null) => {
    let settingUsername = settings.db.username;
    let settingPassword = settings.db.password;
    let settingDatabase = settings.db.database;
    let settingHost = settings.db.host;
    let settingPort = settings.db.port;

    const pool = new Pool({
        user: settingUsername,
        database: settingDatabase,
        password: settingPassword,
        host: settingHost,
        port: settingPort,
    });

    const connection = {
        pool,
        query: (...args) => {
            return pool.connect().then((client) => {
                return client.query(...args).then((res) => {
                    client.release();
                    return res.rows;
                });
            });
        },
    };

    process.postgresql = connection;

    if (callback) {
        callback(connection);
    }

    return connection;
};

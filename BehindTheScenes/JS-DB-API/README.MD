# Initilization

To initilize the Postgresql database, run the following command:

```
npm run pg:init && npm run pg:createdb
```

# Starting the Postgresql database

To start the Postgresql database, run the following command:

```
.\dbStart.bat
```

# Stopping the Postgresql database

To stop the Postgresql database, run the following command:

```
.\dbStop.bat
```

# Add PostgreSQL Credentials

To add your PostgreSQL Credentials, open `src/dbSettings.json`.   
Then, copy this template and edit it with your credentials.

```
{
    "db": {
        "username": "YOUR_USERNAME",
        "password": "YOUR_PASSWORD",
        "database": "YOUR_DATABASE",
        "host": "YOUR_HOST",
        "port": "YOUR_PORT"
    }
}

```

# Running the API

To run the project, run the following command:

```
npm run api
```

## Github GIST for PostgreSQL Connection Script.
[Github GIST](https://gist.github.com/GalaxyGamingBoy/1b504eeb4a7b47e9125eefb857620a51#file-postgresqlmanager-js-L1-L43)

const express = require("express");
const morgan = require("morgan");

const hostname = "localhost";
const port = 3000;

const app = express(); //best practice to name this variable for the express method 'app'
app.use(morgan("dev"));

app.use(express.static(_dirname + "/public"));

app.use((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); //listents to a specific port for any http requests that were sent to our server
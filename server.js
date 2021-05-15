const express = require("express");
const morgan = require("morgan");
const campsiteRouter = require("./routes/campsiteRouter");
const partnerRouter = require("./routes/partnerRouter");
const promotionRouter = require("./routes/promotionsRouter");

const hostname = "localhost";
const port = 3000;

const app = express(); //best practice to name this variable for the express method 'app'
app.use(morgan("dev"));
app.use(express.json()); //middleware function

/* save for workshop reference
app.get("/campsites/:campsiteId", (req, res) => {
    res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
});

app.post("/campsites/:campsiteId", (res, req) => { 
    res.statusCode = 403;
    res.end(`POST operation not supported /campsites/${req.params.campsiteId}`)
});

app.put("/campsites:campsiteId", (req, res) => {
    res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
    res.end(`Will update the campsite: ${req.body.name}
        with description: ${req.body.description}`);
});

app.delete("/campsites/:campsiteId", (req, res) => { 
    res.end(`Deleting campsites ${req.params.campsiteId}`)
});
*/

app.use("/campsites", campsiteRouter);
app.use("/partner", partnerRouter);
app.use("/promotion", promotionRouter)

app.use(express.static(__dirname + "/public")); //two underscores?

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); //listents to a specific port for any http requests that were sent to our server
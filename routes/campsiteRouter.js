const express = require("express");
const campsiteRouter = express.Router();

campsiteRouter.route('/')   
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        next();
    })
    .get((req, res) => {
        res.end("Will send all the campsites to you");
    })
    .post((req, res) => {
        res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /campsites');
    })
    .delete((req, res) => {
        res.end('Deleting all campsites');
    });

// task one. i changed little things in the res.end to verify that it does work
campsiteRouter.route('/:campsiteId')
    .all((req, res, next) => { 
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        next();
    })
    .get((req, res) => {
        res.end("Will send all the NUMBERED campsites to you");
    })
    .post((req, res) => {
        res.end(`Will think about adding the campsite: ${req.params.campsiteId}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /campsites--');
    })
    .delete((req, res) => {
        res.end('UHOH Deleting all campsites');
    });


module.exports = campsiteRouter;
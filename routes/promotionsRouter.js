const express = require("express");
const promotionRouter = express.Router();

promotionRouter.route('/')   
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        next();
    })
    .get((req, res) => {
        res.end("Will send all the promotions to you");
    })
    .post((req, res) => {
        res.end(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promotions');
    })
    .delete((req, res) => {
        res.end('Deleting all promotions');
    });

// task one. i changed little things in the res.end to verify that it does work
promotionRouter.route('/:promotionId')
    .all((req, res, next) => { 
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        next();
    })
    .get((req, res) => {
        res.end("Will send all the NUMBERED promotions to you");
    })
    .post((req, res) => {
        res.end(`CANNOT SUPPORT POST on ${req.params.promotionRouter}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promotions--');
    })
    .delete((req, res) => {
        res.end('UHOH Deleting all promotions');
    });


module.exports = promotionRouter;
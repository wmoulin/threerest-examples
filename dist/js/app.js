"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const helmet = require("helmet");
const threerest_1 = require("threerest");
var app = express();
app.disable('etag');
app.disable('x-powered-by');
app.use(helmet());
app.use(helmet.referrerPolicy({ policy: 'same-origin' }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// load the service 
threerest_1.ServiceLoader.loadServices(app, path.join(__dirname, "services"));
app.listen(8080, () => { console.log("Express start..."); });

//# sourceMappingURL=../maps/app.js.map

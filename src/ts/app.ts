import * as express from 'express';
import * as path from 'path';

import { ServiceLoader } from 'threerest';

var app:express.Application = express(); 

// load the service 
ServiceLoader.loadServices(app, path.join(__dirname, "services"));

app.listen(8080, () => {console.log("Express start...");});

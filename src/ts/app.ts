import * as express from 'express';
import * as path from 'path';
import * as helmet from 'helmet';

import { ServiceLoader } from 'threerest';

var app:express.Application = express(); 



app.disable('etag');
app.disable('x-powered-by');
app.use(helmet());
app.use(helmet.referrerPolicy({ policy: 'same-origin' }))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// load the service 
ServiceLoader.loadServices(app, path.join(__dirname, "services"));

app.listen(8080, () => {console.log("Express start...");});

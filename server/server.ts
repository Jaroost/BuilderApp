///<reference path="../typings/browser.d.ts"/>

import * as express from 'express';

const EXPRESS_APP = express();

EXPRESS_APP.get('/', (req: express.Request, res) => {
	res.json('Welcome to the builder APP REST API!');
});

EXPRESS_APP.listen(3002, ()=>{
	console.log('Express app running on the 3002 port!');
});
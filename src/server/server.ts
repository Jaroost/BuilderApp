import * as express from 'express';
import * as util from 'gulp-util';
import * as chalk from 'chalk';

const EXPRESS_APP = express();

EXPRESS_APP.get('/', (req: express.Request, res) => {
	res.json('Welcome to the builder APP REST API!');
});

EXPRESS_APP.get('/hello', (req: express.Request, res: express.Response) =>{
	res.json('API server says hello to you visitor!');
});

EXPRESS_APP.listen(3002, ()=>{
	util.log('Express app running on the', chalk.yellow('3002'), 'port');
});
import * as express from 'express';
import * as util from 'gulp-util';
import * as chalk from 'chalk';
import {User} from './user';

const EXPRESS_APP = express();

let users=User.RandomUsers(1000000);

EXPRESS_APP.get('/', (req: express.Request, res: express.Response) => {
	res.json('Welcome to the builder APP REST API!');
});

EXPRESS_APP.get('/hello', (req: express.Request, res: express.Response) =>{
	res.json('API server says hello to you visitor!');
});

EXPRESS_APP.get('/users', (req: express.Request, res: express.Response)=>{
	res.json(users);
});

EXPRESS_APP.listen(3002, ()=>{
	util.log('Express app running on the', chalk.yellow('3002'), 'port');
});

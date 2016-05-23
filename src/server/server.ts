import * as express from 'express';
import * as util from 'gulp-util';
import * as chalk from 'chalk';
import {User} from './user';
import {UserContainer} from './user.container';

const EXPRESS_APP = express();

const userContainer=new UserContainer(200);

EXPRESS_APP.get('/', (req: express.Request, res: express.Response) => {
	res.json('Welcome to the builder APP REST API!');
});

EXPRESS_APP.get('/hello', (req: express.Request, res: express.Response) =>{
	res.json('API server says hello to you visitor!');
});

EXPRESS_APP.get('/users', (req: express.Request, res: express.Response)=>{
	res.json(userContainer.users);
	//res.json(JSON.stringify(userContainer.users, null, 3));
});

EXPRESS_APP.listen(3002, ()=>{
	util.log('Express app running on the', chalk.yellow('3002'), 'port');
});

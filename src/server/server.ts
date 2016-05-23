import * as express from 'express';
import * as util from 'gulp-util';
import * as chalk from 'chalk';
import * as jwt from 'express-jwt';
import {User} from './user';
import {UserContainer} from './user.container';

const EXPRESS_APP = express();

const userContainer=new UserContainer(400);
const JWT_CHECK=jwt({
	secret: new Buffer("VqPEjyiGncpqLZoPFgZNUIQsEcVRbZ4vcjN85uQF5cTaAHCIauUacPTdQ_f0OzZ1", 'base64'),
	audience: 'bUfoWb8hk8OsP9VUV2gpr7WlFE5LOWb9'
});

EXPRESS_APP.use('/', JWT_CHECK);
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

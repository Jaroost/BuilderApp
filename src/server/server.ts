import * as express from 'express';
import * as util from 'gulp-util';
import * as chalk from 'chalk';
import * as jwt from 'express-jwt';
import {User} from './user';

const EXPRESS_APP = express();
const JWT_CHECK=jwt({
	secret: new Buffer("VqPEjyiGncpqLZoPFgZNUIQsEcVRbZ4vcjN85uQF5cTaAHCIauUacPTdQ_f0OzZ1", 'base64'),
	audience: 'bUfoWb8hk8OsP9VUV2gpr7WlFE5LOWb9'
});
let users=User.RandomUsers(10000);

EXPRESS_APP.use('/', JWT_CHECK);
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

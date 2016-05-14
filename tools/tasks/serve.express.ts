import * as gulpExpress from 'gulp-express';
import * as watch from 'gulp-watch';
import * as util from 'gulp-util';
import * as chalk from 'chalk';


export = () => {
    try {
	    gulpExpress.run(['dist/dev/server/server.js']);
    } catch (error) {
        util.log(chalk.red(`Impossible to start the API server! error:${error}`));
    }
};
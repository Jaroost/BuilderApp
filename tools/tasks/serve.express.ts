import * as gulpExpress from 'gulp-express';
import * as watch from 'gulp-watch';


export = () => {
	gulpExpress.run(['dist/dev/server/server.js']);
};
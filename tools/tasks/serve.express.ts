import * as nodemon from 'gulp-nodemon';
import * as watch from 'gulp-watch';
import * as util from 'gulp-util';
import * as chalk from 'chalk';


export = () => {
    nodemon({
        script: 'dist/dev/server/server.js',
        watch: ['dist/dev/server']
    });
};
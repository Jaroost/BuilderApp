import * as gulp from 'gulp';
import {APP_DIR, DEV_DIR} from '../config';
import {join} from 'path';

//Move all the files from APP_DIR to DEV_DIR without the .ts files
export = () =>{
	let files: string[] = [join(APP_DIR, '**'), `!${join(APP_DIR, '**', '*.ts')}`];
	return gulp.src(files)
	.pipe(gulp.dest(DEV_DIR));
};
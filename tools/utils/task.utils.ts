import * as gulp from 'gulp';
import * as util from 'gulp-util';
import * as chalk from 'chalk';
import {dirname, basename, join} from 'path';
import * as isstream from 'isstream';
import {readdir, readdirSync, existsSync} from 'fs';

export function loadTasks(path: string): void {
	util.log('Loading tasks folder', chalk.yellow(path));
	readDir(path, file => registerTask(file));
}

function registerTask(file:string){
	let taskname = basename(file,'.ts');
	util.log('Register', chalk.yellow(taskname), 'task');
	gulp.task(taskname, (done: any) => {
		const task = require(file);
		if (task.length > 0) {
			return task(done);
		}

		const taskReturnedValue = task();
		if (isstream(taskReturnedValue)) {
			return taskReturnedValue;
		}

		// TODO: add promise handling if needed at some point.

		done();
	});
}

function readDir(root: string, cb:(file:string)=>void){
	let files:string[]=readdirSync(root);
	for (let i = 0; i < files.length; i++){
		cb(join(root,files[i]));
	}
}
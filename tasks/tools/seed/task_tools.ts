///<reference path="../../../typings/browser.d.ts"/>

import * as util from 'gulp-util';
import * as chalk from 'chalk';

export function loadTasks(path: string): void {
	util.log('Loading tasks folder', chalk.yellow(path));
	readDir(path, taskname => registerTask(path, taskname));
}

function registerTask(path:string, taskname:string){
	console.log(`Register task! ${path} ${taskname}`);
}

function readDir(root: string, callBack:(taskname:string)=>void){
	console.log(`Read dir from ${root}. Calling the ${callBack} on each file!`);
	callBack('test');
}
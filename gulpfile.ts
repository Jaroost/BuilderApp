import {loadTasks} from './tools/utils';
import {TASK_DIR} from './tools/config';
import * as gulp from 'gulp';
import * as runSequence from 'run-sequence';

loadTasks(TASK_DIR);

gulp.task('build.dev', (done: any) =>
	runSequence(
		'build.dev.assets',
		'build.dev.js',
		'serve.express',
		done));

gulp.task('serve.dev', (done: any) =>
	runSequence('build.dev',
		'server.dev',
		'watch.dev',
		done));
		
gulp.task('test', (done:any) =>{
	//runSequence('serve.express', done);
});



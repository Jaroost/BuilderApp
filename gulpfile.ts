import * as gulp from 'gulp';
import * as gutil from 'gulp-util';
import * as ts from 'gulp-typescript';
import {clean, loadTasks} from './tasks/tools/tools';

gulp.task('serve.dev', (done: any) =>{
	console.log('passage');
	clean('test');
	loadTasks('./tasks/tasks');
});

gulp.task('ts', () => {
	let filenames = 'tasks/tools/seed/task_tools.ts';
	gutil.log(gutil.colors.bgBlack.white('Compiling file from '), gutil.colors.bgBlack.magenta(filenames));
	gulp.src(filenames)
		.pipe(ts())
		// .pipe(uglify())
		.pipe(gulp.dest('server_dist/'));
	gutil.beep();
});
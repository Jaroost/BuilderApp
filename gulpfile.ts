import * as gulp from 'gulp';
import * as util from 'gulp-util';
import * as concat from 'gulp-concat';
import * as uglify from 'gulp-uglify';
import * as ts from 'gulp-typescript';


gulp.task('default', function(){
	console.log('ici');
});

gulp.task('scripts', function(){
	console.log('scripts');
	gulp.src('app/js/*.js')
		.pipe(concat('script.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('ts', function(){
	console.log('Compile typescripts');
	gulp.src('server/*.ts')
		.pipe(ts())
		// .pipe(uglify())
		.pipe(gulp.dest('server_dist/'));
});
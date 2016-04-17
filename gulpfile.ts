import * as gulp from 'gulp';
import * as gutil from 'gulp-util';
import * as concat from 'gulp-concat';
import * as uglify from 'gulp-uglify';
import * as ts from 'gulp-typescript';


gulp.task('default', function(){
	console.log('here!');
});

gulp.task('scripts', function(){
	console.log('scripts');
	gulp.src('app/js/*.js')
		.pipe(concat('script.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('ts', function(){
	let filenames = 'server/*.ts';
	gutil.log(gutil.colors.bgBlack.white('Compiling file from '), gutil.colors.bgBlack.magenta(filenames));
	gulp.src(filenames)
		.pipe(ts())
		// .pipe(uglify())
		.pipe(gulp.dest('server_dist/'));
	gutil.beep();
});
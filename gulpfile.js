var gulp = require('gulp');
var gulputil=require('gulp-util');
var concat=require('gulp-concat');
var uglify=require('gulp-uglify');

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
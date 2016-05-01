import * as gulp from 'gulp';

export = () => {
	let files = ['./server/*.*'];
	let dest = './server_dist/';

	return gulp.src(files).pipe(
		gulp.dest(dest));
};
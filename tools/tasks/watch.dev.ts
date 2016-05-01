import * as runSequence from 'run-sequence';
//import {notifyLiveReload} from '../utils';
import * as browserSync from 'browser-sync';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import {join} from 'path';
import {APP_DIR} from '../config';
const plugins = <any>gulpLoadPlugins();

function watch(taskname: string) {
	return function() {
		plugins.watch(join(APP_DIR, '**'), (e: any) =>
			runSequence(taskname, () => changed(e))
		);
	};
}

let changed = (files: any) => {
	if (!(files instanceof Array)) {
		files = [files];
	}
	// if (ENABLE_HOT_LOADING) {
	//   ng2HotLoader.onChange(files);
	// } else {
	//TODO: Figure out why you can't pass a file to reload
	browserSync.reload(files.path);
	//}
};

export = watch('build.dev')

import * as gulpLoadPlugins from 'gulp-load-plugins';
const plugins = <any>gulpLoadPlugins();

let _tsProject: any;

export function makeTsProject() {
	if (!_tsProject) {
		const config = {
			typescript: require('typescript')
		};
		_tsProject = plugins.typescript.createProject('tsconfig.json', config);
	}
	return _tsProject;
}
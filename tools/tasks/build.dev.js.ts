import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import {join} from 'path';
import {APP_DIR, DEV_DIR} from '../config';
import {makeTsProject} from '../utils';
const plugins = <any>gulpLoadPlugins();

export = () => {
  let tsProject = makeTsProject();
  let projectFiles = gulp.src([
    'typings/index.d.ts',
    join(APP_DIR, '**/*.ts')
  ]);
  
  let result =  projectFiles
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.typescript(tsProject));


  return result.js
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest(DEV_DIR));
};
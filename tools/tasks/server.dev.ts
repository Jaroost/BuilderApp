import {BROWSER_SYNC_CONFIG} from '../config';
import * as browserSync from 'browser-sync';

export = () => {
	browserSync.init(BROWSER_SYNC_CONFIG);
};
export class ProjectConfiguration{
	APP_DIR: string = `${process.cwd()}/src`;
	DIST_DIR:string = 'dist';
	DEV_DIR:string = `${this.DIST_DIR}/dev`;
	DEV_APP_DIR: string = `${this.DEV_DIR}/app`;
	PROD_DIR:string = `${this.PROD_DIR}/prod`;
	SERVER_PROD_DIR:string = `${this.PROD_DIR}/server`;
	TASK_DIR:string = `${process.cwd()}/tools/tasks`;

	APP_BASE: string = '/';
	PORT: number = 3000;

	BROWSER_SYNC_CONFIG: any = {
		middleware: [require('connect-history-api-fallback')({ index: `/index.html` })],
		port: 3000,
		startPath: '/',
		server: {
			baseDir: `${this.DEV_APP_DIR}`
		}
	};
}
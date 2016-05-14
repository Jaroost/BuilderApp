declare module 'gulp-express'{
    interface IRun{
        run(files: string[]): any;
        notify():any;
    }
    const run:IRun;
    export = run;
}
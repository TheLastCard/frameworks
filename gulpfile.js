const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./angular2/tsconfig.json');
const nodemon = require('gulp-nodemon');



// TypeScript compile
gulp.task('angular2_tsconmpile',  function () {
    return gulp
      .src('angular2/app/**/*.ts')
      .pipe(typescript(tscConfig.compilerOptions))
      .pipe(gulp.dest('angular2/app/'));
});

gulp.task('start', function () {
    nodemon({
        script: 'server.js',
        ext: 'js html ts',
        env: { 'NODE_ENV': 'development' }
    })
});


gulp.task('default', ['start']);
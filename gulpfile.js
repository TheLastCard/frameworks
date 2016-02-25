const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const nodemon = require('gulp-nodemon');




gulp.task('start', function () {
    nodemon({
        script: 'server.js',
        ext: 'js html ts',
        env: { 'NODE_ENV': 'development' }
    })
});


gulp.task('default', ['start']);
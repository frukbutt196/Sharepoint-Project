
'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');

build.initialize(gulp);

gulp.task('default', build.default);
gulp.task('bundle', (done) => {
    build.bundle();
    done();
});
gulp.task('package-solution', (done) => {
    build.packageSolution();
    done();
});


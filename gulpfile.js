
'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');

build.initialize(gulp);

gulp.task('default', build.default);

// ✅ Correct way to define 'bundle' task
gulp.task('bundle', build.subTask('bundle', function (gulp, buildOptions, done) {
    build.log('Bundling SharePoint Framework solution...');
    return build.bundle()(done);
}));

// ✅ Correct way to define 'package-solution' task
gulp.task('package-solution', build.subTask('package-solution', function (gulp, buildOptions, done) {
    build.log('Packaging SharePoint Framework solution...');
    return build.packageSolution()(done);
}));


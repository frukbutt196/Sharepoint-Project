
'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');

// Initialize SPFx build tasks
build.initialize(gulp);

gulp.task('default', build.default);
gulp.task('bundle', build.bundle);
gulp.task('package-solution', build.packageSolution);

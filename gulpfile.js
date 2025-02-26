
'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');

build.initialize(gulp);

gulp.task('default', build.default);

// ✅ Properly define bundle task
gulp.task('bundle', build.bundle.bind(build));

// ✅ Properly define package-solution task
gulp.task('package-solution', build.packageSolution.bind(build));


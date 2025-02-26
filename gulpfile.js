
'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');

build.initialize(gulp);

gulp.task('default', build.default);

// ✅ Correct way to define 'bundle' task

gulp.task('bundle', build.bundle);

// ✅ Correct way to define 'package-solution' task

gulp.task('package-solution', build.packageSolution);


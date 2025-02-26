
'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');

build.initialize(gulp);

// ✅ Corrected the gulp tasks
gulp.task('bundle', () => build.bundle());
gulp.task('package-solution', () => build.packageSolution());

gulp.task('default', gulp.series('bundle', 'package-solution'));


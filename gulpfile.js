'use strict';
require('es6-promise').Promise;
let gulp = require('gulp');
let gulpsync = require('gulp-sync')(gulp);
let react = require('gulp-react');

// using vinyl-source-stream:
gulp.task('browserify', require('./tasks/browserify.js'));

//eslint task
gulp.task('eslint', require('./tasks/eslint.js'));

//sass - scss task
gulp.task('sass', require('./tasks/sass.js'));

//watch js/scss/teplate files
gulp.task('watch', require('./tasks/watch.js'));

//local server
gulp.task('browser-sync', require('./tasks/browser-sync.js'));

// Default Task
gulp.task('default', gulpsync.sync(['sass', 'eslint', 'browserify', 'browser-sync', 'watch']));

gulp.task('deploy', gulpsync.sync(['sass', 'browserify']));
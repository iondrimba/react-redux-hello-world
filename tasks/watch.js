var gulp = require('gulp');
var watch = require('gulp-watch');
var gulpsync = require('gulp-sync')(gulp);

module.exports = function () {
	gulp.watch('./src/scripts/**', gulpsync.sync(['eslint', 'browserify'])),
	gulp.watch('./src/scss/**/*.scss', ['sass']);
};
'use strict';
require('es6-promise').Promise;
let gulp = require('gulp');
let gulpsync = require('gulp-sync')(gulp);
let react = require('gulp-react');

// using vinyl-source-stream:
gulp.task('browserify', require('./tasks/browserify.js'));

//eslint task
gulp.task('eslint', require('./tasks/eslint.js'));

//scss lint task
gulp.task('scsslint', require('./tasks/scss-lint.js'));

//uglify task
gulp.task('uglify', require('./tasks/uglify.js'));

//imagemmin task
gulp.task('imagemin', require('./tasks/imagemin.js'));

//sass - scss task
gulp.task('sass', require('./tasks/sass.js'));

//watch js/scss/teplate files
gulp.task('watch', require('./tasks/watch.js'));

//html min
gulp.task('html-min', require('./tasks/html-min.js'));

//css min
gulp.task('minify-css', require('./tasks/minify-css.js'));

//post css
gulp.task('post-css', require('./tasks/post-css.js'));

//coveralls
gulp.task('coveralls', require('./tasks/coveralls.js'));

//local server
gulp.task('browser-sync', require('./tasks/browser-sync.js'));

gulp.task('react', function() {
	return gulp.src('./src/scripts/*.jsx')
		.pipe(react())
		.pipe(gulp.dest('./src/scripts/'));
});

// Default Task
gulp.task('default', gulpsync.sync(['sass', 'browserify', 'watch', 'browser-sync']));
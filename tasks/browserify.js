var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var babelify = require("babelify");

module.exports = function() {

	var bundleStream = browserify('./src/scripts/main.jsx')
		.transform(babelify, {
			'presets': ['es2015', 'react']
		})
		.bundle();

	bundleStream
		.pipe(source('app.js'))
		.pipe(gulp.dest('./public/js'))
};
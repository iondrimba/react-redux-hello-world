var istanbul = require('browserify-istanbul');
var threshold = require('karma-threshold-reporter');

module.exports = function(config) {
    config.set({

        basePath: '',
        frameworks: ['browserify', 'jasmine'],
        files: [
            'src/scripts/app.js',
            'spec/*.js'
        ],
        included: false,
        browserify: {
            debug: true,
            transform: ['stringify', 'babelify', istanbul({
                defaultIgnore: true
            })],
            extensions: ['.js'],
            bundleDelay: 1000
        },
        babelPreprocessor: {
            options: {
                presets: ['es2015']
            },
            filename: function(file) {
                return file.originalPath;
            },
            sourceFileName: function(file) {
                return file.originalPath;
            }
        },
        preprocessors: {
            'src/scripts/app.js': ['babel', 'browserify'],
            'spec/*.js': ['babel', 'browserify']
        },
        coverageReporter: {
            instrumenters: { isparta: require('isparta') },
            instrumenter: {
                'spec/*.js': 'isparta'
            },
            instrumenterOptions: {
                isparta: { babel: { presets: 'es2015' } }
            },
            istanbul: { noCompact: true },
            dir: 'test/reports/coverage',
            reporters: [
                {
                    type: 'lcovonly',
                    subdir: 'report-lcov'
                }
            ]
        },
        reporters: ['spec', 'coverage', 'threshold'],
        thresholdReporter: {
            statements: 80,
            branches: 50,
            functions: 85,
            lines: 90
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true,
        concurrency: Infinity
    })
}
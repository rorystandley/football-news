// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('@angular-devkit/build-angular/plugins/karma'),
            require("karma-spec-reporter"),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('karma-junit-reporter'),
            require('karma-sabarivka-reporter'),
        ],
        files: [],

        // optionally, configure the reporter
        coverageReporter: {
            includeAllSources: true,
            dir: 'coverage/',
            reporters: [
                {type: 'text-summary'},
                {type: 'json'},
                {type: 'html'},
                {type: 'lcov'}
            ],
            include: [
                '**/*.ts',
                '!node_modules/',
                '!**/polyfills.ts',
                '!**/*.module.ts',
                '!**/*.spec.ts',
                '!mocks.ts',
                '!test.ts',
                '!**/environment.ts',
                '!**/main.ts',
                '!**/*interface.ts'
            ]
        },
        mime: {
            'text/x-typescript': ['ts', 'tsx']
        },
        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, 'coverage'),
            reports: ['html', 'lcovonly', 'text', 'cobertura', 'clover'],
            fixWebpackSourcePaths: true,
            thresholds: {
                statements: 5,
                lines: 5,
                branches: 0,
                functions: 5
            },
        },
        reporters: ['sabarivka', 'coverage-istanbul', 'spec', 'kjhtml'],
        customLaunchers: {
            ChromeHeadless: {
                base: 'Chrome',
                flags: [
                    '--headless',
                    '--disable-gpu',
                    '--remote-debugging-port=9222',
                ],
            }
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['ChromeHeadless'],
        singleRun: true,
        restartOnFileChange: true
    });
};

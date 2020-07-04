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
            require('karma-coverage-istanbul-reporter'),
            require('karma-spec-reporter'),
        ],
        coverageIstanbulReporter: {
            reports: ['html', 'lcovonly', 'text'],
            dir: require('path').join(__dirname, 'coverage'),
            fixWebpackSourcePaths: true,
            skipFilesWithNoCoverage: false,
            thresholds: {
                emitWarning: false, // set to `true` to not fail the test command when thresholds are not met
                global: {
                    statements: 80,
                    lines: 80,
                    branches: 80,
                    functions: 80
                }
            },
        },
        reporters: ['coverage-istanbul', 'spec'],
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

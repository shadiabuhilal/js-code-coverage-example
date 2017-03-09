/**
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-mocha-phantom-istanbul');

    grunt.config.set('mocha', {
        options: {
            run: true,
            reporter: 'Spec',
            coverage: {
                jsonReport: 'coverage',
                coberturaReport: 'coverage',
                lcovReport: 'coverage',
                cloverReport: 'coverage'
            }
        },
        test: {
            src: ['test/client-side/**/*.html']
        }
    });

};

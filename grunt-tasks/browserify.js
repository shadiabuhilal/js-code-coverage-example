/**
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';

var istanbul = require('browserify-istanbul');

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-browserify');

    grunt.config.set('browserify', {
        options: {
            browserifyOptions: {
                debug: true
            },
            postBundleCB: function (err, buffer, next) {
                var code = grunt.template.process(buffer.toString(), { data: grunt.file.readJSON('package.json') });
                next(err, code);
            }
        },
        coverage: {
            files: {
                'instrumented-code/instrumented-example.js': 'src/example.js'
            },
            options: {
                transform: [istanbul]
            }
        }
    });
};

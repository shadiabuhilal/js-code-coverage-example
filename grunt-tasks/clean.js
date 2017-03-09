/**
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';

module.exports = function(grunt) {

    // Before generating any new files, remove any previously-created files.
    grunt.config.set('clean', {
        tests: ['coverage', 'instrumented-code']
    });

    grunt.loadNpmTasks('grunt-contrib-clean');

};

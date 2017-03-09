/**
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';

module.exports = function(grunt) {

    grunt.registerTask('test', ['clean', 'browserify:coverage', 'mocha']);

};

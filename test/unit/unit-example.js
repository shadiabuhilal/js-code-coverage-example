/**
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';

var expect = chai.expect;

describe('exmaple.js > MyJsCode', function() {
    var div;
    before(function () {
        div = null;
    });

    describe('MyJsCode.getStudentGrade', function() {

        it('MyJsCode.getStudentGrade should be function', function () {
            expect(MyJsCode.getStudentGrade).to.be.a('function');
        });

        it('MyJsCode.getStudentGrade should return B', function () {
            expect(MyJsCode.getStudentGrade(88)).to.equal('B');
        });

        it('MyJsCode.getStudentGrade should return C', function () {
            expect(MyJsCode.getStudentGrade(75)).to.equal('C');
        });

    });

    describe('MyJsCode.createDivWithText', function() {

        it('MyJsCode.createDivWithText should be function', function () {
            expect(MyJsCode.createDivWithText).to.be.a('function');
        });

        it('MyJsCode.createDivWithText should return div object', function () {
            div = MyJsCode.createDivWithText('div1', 'Hello world!');
            expect(div.id).to.equal('div1');
            expect(div.innerHTML).to.equal('Hello world!');
            expect(div.parentNode.id).to.equal('myData');
        });

        it('MyJsCode.createDivWithText should return div object', function () {
            div = MyJsCode.createDivWithText('div2', 'testing');
            expect(div.id).to.equal('div2');
            expect(div.innerHTML).to.equal('testing');
            expect(div.parentNode.id).to.equal('myData');
        });

    });

});

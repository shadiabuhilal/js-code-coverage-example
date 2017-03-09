/**
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';

var MyJsCode = {};

MyJsCode.getStudentGrade = function (score) {
    if (score < 70) {
        return 'D';
    }

    if (score < 80) {
        return 'C';
    }

    if (score < 90) {
        return 'B';
    }

    if (score < 100) {
        return 'A';
    }

    return 'F';
}


MyJsCode.createDivWithText = function  (id, text) {
    var div = document.createElement('div');
    div.id = id;
    div.innerHTML = text;
    document.getElementById('myData').appendChild(div);
    return div;
}


// this will make this var global after instrumention
window.MyJsCode = MyJsCode;

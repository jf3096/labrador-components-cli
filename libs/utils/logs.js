"use strict";
const npmWarning = require('warning');
const invariant = require('invariant');
const __DEV__ = process.env.NODE_ENV !== 'production';
const func = f => f;
exports.log = !__DEV__ ? func : (condition, format, ...extra) => {
    if (!condition) {
        console.log(format);
    }
    let argIndex = 0;
    format.replace(/%s/g, function () {
        return extra[argIndex++];
    });
};
exports.warning = !__DEV__ ? func : () => npmWarning;
exports.error = !__DEV__ ? func : invariant;
exports.info = !__DEV__ ? func : (condition, format, ...extra) => {
    if (!condition) {
        console.info(format);
    }
    let argIndex = 0;
    format.replace(/%s/g, function () {
        return extra[argIndex++];
    });
};

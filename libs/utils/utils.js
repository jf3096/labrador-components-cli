"use strict";
exports.packageJSON = require('./packageJSON').default;
exports.getCurrentCwd = (() => {
    let path = null;
    return () => {
        !path && (path = process.cwd());
        return path;
    };
})();
function mirrorArray2Object(arr) {
    const mirrorObject = {};
    if (arr && arr.length) {
        arr.reduce((previousValue, currentValue) => {
            previousValue[currentValue] = currentValue;
            return previousValue;
        }, mirrorObject);
    }
    return mirrorObject;
}
exports.mirrorArray2Object = mirrorArray2Object;

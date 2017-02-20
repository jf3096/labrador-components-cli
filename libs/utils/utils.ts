export const packageJSON = require('./packageJSON').default;

export const getCurrentCwd = (() => {
    let path = null;
    return () => {
        !path && (path = process.cwd());
        return path;
    }
})();

export function mirrorArray2Object(arr: string[]): {[key: string]: string} {
    const mirrorObject = {};
    if (arr && arr.length) {
        arr.reduce((previousValue, currentValue) => {
            previousValue[currentValue] = currentValue;
            return previousValue;
        }, mirrorObject);
    }
    return mirrorObject;
}
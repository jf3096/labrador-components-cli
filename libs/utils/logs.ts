import npmWarning = require('warning');
import * as invariant from 'invariant';
const __DEV__ = process.env.NODE_ENV !== 'production';
const func: any = f => f;

export const log = !__DEV__ ? func : (condition: any, format?: string, ...extra: any[]) => {
    if (!condition) {
        console.log(format);
    }
    let argIndex = 0;
    format.replace(/%s/g, function () {
        return extra[argIndex++];
    });
};

export const warning = !__DEV__ ? func : () => npmWarning;

export const error = !__DEV__ ? func : invariant;

export const info = !__DEV__ ? func : (condition: any, format?: string, ...extra: any[]) => {
    if (!condition) {
        console.info(format);
    }
    let argIndex = 0;
    format.replace(/%s/g, function () {
        return extra[argIndex++];
    });
};
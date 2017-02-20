import * as shell from 'shelljs';
import * as invariant from 'invariant';
import * as path from 'path';
import {mirrorArray2Object} from './utils';
import {warning} from './logs';
const recursive = require('recursive-readdir');
const fs = require('fs-extra');

export function createDirectoryIfNoneExist(targetSrc: string) {
    shell.mkdir('-p', targetSrc);
}

export async function copyFilesIfNoneExist(rawSourceSrc: string, rawTargetSrc: string) {
    const sourceFiles = await getAllFiles(rawSourceSrc);
    const targetFiles = await getAllFiles(rawTargetSrc);

    const relativeSourceMirrorObject = mirrorArray2Object(sourceFiles.map((sourceFile: string) => {
        return path.relative(rawSourceSrc, sourceFile);
    }));

    const relativeTargetMirrorObject = mirrorArray2Object(targetFiles.map((targetFile: string) => {
        return path.relative(rawTargetSrc, targetFile);
    }));
    for (const key in relativeSourceMirrorObject) {
        const isExist = relativeTargetMirrorObject[key];
        if (isExist) {
            warning(false, `${key} 已经存在, 忽略该文件。`);
        } else {
            const source = path.resolve(rawSourceSrc, key);
            const destination = path.resolve(rawTargetSrc, key);
            fs.copy(source, destination, err => warning(err, err.stack));
        }
    }
}

export function getAllFiles(sourceFileSrc: string): Promise<string[]> {
    return new Promise(resolve => recursive(sourceFileSrc, (err, files) => {
        invariant(!err, err && err.stack);
        resolve(files);
    }));
}
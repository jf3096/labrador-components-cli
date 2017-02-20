"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const shell = require('shelljs');
const invariant = require('invariant');
const path = require('path');
const utils_1 = require('./utils');
const logs_1 = require('./logs');
const recursive = require('recursive-readdir');
const fs = require('fs-extra');
function createDirectoryIfNoneExist(targetSrc) {
    shell.mkdir('-p', targetSrc);
}
exports.createDirectoryIfNoneExist = createDirectoryIfNoneExist;
function copyFilesIfNoneExist(rawSourceSrc, rawTargetSrc) {
    return __awaiter(this, void 0, void 0, function* () {
        const sourceFiles = yield getAllFiles(rawSourceSrc);
        const targetFiles = yield getAllFiles(rawTargetSrc);
        const relativeSourceMirrorObject = utils_1.mirrorArray2Object(sourceFiles.map((sourceFile) => {
            return path.relative(rawSourceSrc, sourceFile);
        }));
        const relativeTargetMirrorObject = utils_1.mirrorArray2Object(targetFiles.map((targetFile) => {
            return path.relative(rawTargetSrc, targetFile);
        }));
        for (const key in relativeSourceMirrorObject) {
            const isExist = relativeTargetMirrorObject[key];
            if (isExist) {
                logs_1.warning(false, `${key} 已经存在, 忽略该文件。`);
            }
            else {
                const source = path.resolve(rawSourceSrc, key);
                const destination = path.resolve(rawTargetSrc, key);
                fs.copy(source, destination, err => logs_1.warning(err, err.stack));
            }
        }
    });
}
exports.copyFilesIfNoneExist = copyFilesIfNoneExist;
function getAllFiles(sourceFileSrc) {
    return new Promise(resolve => recursive(sourceFileSrc, (err, files) => {
        invariant(!err, err && err.stack);
        resolve(files);
    }));
}
exports.getAllFiles = getAllFiles;
